const express = require('express');
var bodyParser = require('body-parser')
const router = require('./router');

const app = express()


const port = 5000;

app.use(bodyParser.json())
app.use('/', router);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})