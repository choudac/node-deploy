const http = require('http')

const homePage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Node.js 部署上线示例</title>
    </head>
    <body>
      <h1>成功呀呀 Nodejs 部署发布</h1>
    </body>
  </html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)
}).listen(5000, () => {
  console.log('Server running at 5000')
})

//ssh -p 39999 rn_manager@47.107.166.91
