const url = require('url')
const fs = require('fs')

const renderHtml = (path, res) => {
  fs.readFile(path, null, (error, data) => {
    if (error) {
      res.writeHead(404)
      res.write('File not found!')
    } else {
      res.write(data)
    }
    res.end()
  })
}

module.exports = {
  handleReq: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const path = url.parse(req.url).pathname
    switch (path) {
      case '/':
        renderHtml('./index.html', res)
        break
      case '/login':
        renderHtml('./login.html', res)
        break
      default:
        res.writeHead(404)
        res.write('Route not found.')
        res.end()
        break
    }
  }
}