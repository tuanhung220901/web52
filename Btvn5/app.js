//require('dotenv').config();
const bodyParser = require('body-parser');
const Router = require("./router")
const express = require("express");
const{connect} = require('./config/dbConnect');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect();

app.use('/',Router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})