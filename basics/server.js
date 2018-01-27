const http = require('http')
const app = require('./app')

http.createServer(app.handleReq).listen(3000)
