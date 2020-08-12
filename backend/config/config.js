const env = process.env.NODE_ENV;

const dev = {
    APP: {
        PORT: 3000
    },
    DB: {
        HOST: 'localhost',
        PORT: 3606,
        DBNAME: 'userauth',
        USER: 'root',
        PASS: 'admin123',
        DIALECT: "mysql",
    }
};

const test = {
    APP: {
        PORT: 4000
    },
    DB: {
        HOST: 'localhost',
        PORT: 3606,
        DBNAME: 'userauth',
        USER: 'root',
        PASS: 'admin123',
        DIALECT: "mysql",
    }
};

const prod = {
    APP: {
        PORT: 5000
    },
    DB: {
        HOST: 'localhost',
        PORT: 3606,
        DBNAME: 'userauth',
        USER: 'root',
        PASS: 'admin123',
        DIALECT: "mysql",
    }
};

const config = {
    dev,
    test,
    prod
};

module.exports = config[env];
