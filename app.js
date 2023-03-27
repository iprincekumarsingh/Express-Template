const express = require('express')
const app = express()


const home = require('./routes/home.route')

app.use('/api/v1', home);
module.exports = app