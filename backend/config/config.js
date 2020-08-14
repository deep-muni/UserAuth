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
    },
    SECRET: {
        KEY: "devkey"
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
    },
    SECRET: {
        KEY: "testkey"
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
    },
    SECRET: {
        KEY: "prodkey"
    }
};

const config = {
    dev,
    test,
    prod
};

module.exports = config[env];
