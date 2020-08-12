module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        user_name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        user_fname: {
            type: Sequelize.STRING
        },
        user_lname: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING
        },
        user_dob: {
            type: Sequelize.DATEONLY
        },
        user_gender: {
            type: Sequelize.STRING
        },
        user_pass: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user'
    });
};
