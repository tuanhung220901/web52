const express = require('express');
const useRouter = require('./user');
const app = express();
app.use('/user',useRouter);
module.exports = app;