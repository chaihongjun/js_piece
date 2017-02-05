const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Set-Cookie', ['name=zhou; path=/img', 'status=active']);
  res.end('Hello World\n');
});

server.listen(port, hostname, function () {
  console.log('关闭所有服务器软件，打开网址：http://jsz.cn/');
});
