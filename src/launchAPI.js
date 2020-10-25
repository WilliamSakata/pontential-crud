const app = require('./configAPI')
const HTTP_PORT = 3000
const HOST = '0.0.0.0'

app.listen(HTTP_PORT, HOST, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`)
})