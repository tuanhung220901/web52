const mongoose = require('mongoose');

function connect() {
    const mongoUrl = 'mongodb+srv://hung2209:IceTYY0GA2z4Daxr@cluster0.29mim.mongodb.net/bai4?retryWrites=true&w=majority'
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Connect mongodb database!")
    mongoose.connection.on('error', error => console.log('error connect db', error))
    mongoose.connection.once('open', () => console.log(`Connect to saving DB successfully!!!`))
}

module.exports = { connect }