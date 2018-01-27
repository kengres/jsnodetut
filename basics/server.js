const http = require('http')
const fs = require('fs')

const onRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('./index.html', null, (error, data) => {
    if (error) {
      res.writeHead(404)
      res.write('File not found!')
    } else {
      res.write(data)
    }
    res.end()
  })
  res.write('hello world. server is live baby!')
  res.end()
}

http.createServer(onRequest).listen(3000)
