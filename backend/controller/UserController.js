const db = require("../db/connect");
const jwt = require('jsonwebtoken');
const env = require("../config/config");
const bcrypt = require('bcrypt');
const User = db.user;

const register = (req, res) => {

    const dob = new Date(req.body.dob);
    const user = {
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_email: req.body.user_email,
        dob: dob,
        gender: req.body.gender,
        password: req.body.password
    };

    User.findOne({ where: { user_name: user.user_name } })
        .then(data => {
            if(data){
                res.send({status: false, message: "User already exist"});
            }else{
                User.create(user)
                    .then(data => {
                        res.send({status: true, message: "User added"});
                    })
                    .catch(err => {
                        res.send({status: null, message: err});
                    });
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const login = (req, res) => {
    User.findOne({ where: { user_name: req.body.user_name } })
        .then(data => {
            if(data) {
                if(validPassword(req.body.password, data.password)) {
                    jwt.sign({user: data}, env.SECRET.KEY, (err, token) => {
                        res.send({status: true, message: "success", token: token});
                    });
                }else{
                    res.send({status: false, message: "Please check the credentials"});
                }
            }else {
                res.send({status: false, message: "Please check the credentials"});
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const test = (req, res) => {
    jwt.verify(req.headers.authorization, env.SECRET.KEY, (err, data) => {
        if(err){
            console.log(err);
            res.send({status: true, message: "Please login"});
        }else{
            console.log(data);
            res.send({status: true, message: "Welcome"});
        }
    });
}

const validPassword = (pass, password) => {
    return bcrypt.compareSync(pass, password);
}

module.exports.register = register;
module.exports.login = login;
module.exports.test = test;
