const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Our anything page');
    return;
  }
  res.end(`<h1>Oops!</h1>
  <p>Error</p>
  <a href="/">back home</a>`);
});

server.listen(1000);
