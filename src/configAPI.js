const express = require('express')

const app = express()

app.use(express.json())

require('./routes/developers')(app)

express.Router()


module.exports = app