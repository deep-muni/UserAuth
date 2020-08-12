const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const env = require("./config/config");
const db = require("./db/connect");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize.sync()
    .then(() => {
        console.log("Tables Synchronized");
    })

app.get('/', function (req, res) {
    res.send("Application Working");
});

app.listen(env.APP.PORT, () => {
    console.log("Server is running on port " + env.APP.PORT);
})
