const http = require('http')


const server = http.createServer((req, res) => {
  res.write('server response')
  res.end()
})

server.listen((3001), () => {
  console.log('server is ruuning on port 3001')
})

// Streams and buffers next 
