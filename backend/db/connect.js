const Sequelize = require("sequelize");
const env = require("../config/config");

const sequelize = new Sequelize(env.DB.DBNAME, env.DB.USER, env.DB.PASS, {
    host: env.DB.HOST,
    dialect: env.DB.DIALECT,
    logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../model/UserModel")(sequelize, Sequelize);

module.exports = db;
