const express = require('express')

const app = express()

const HTTP_PORT = 3000

app.use(express.json())

require('./routes/developers')(app)

express.Router()

app.listen(HTTP_PORT, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`)
})

