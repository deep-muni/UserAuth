const db = require("../db/connect");
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
                    res.send({status: true, message: "success"});
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

const validPassword = (pass, password) => {
    return bcrypt.compareSync(pass, password);
}

module.exports.register = register;
module.exports.login = login;
