const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('index.html', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(8000);


// const port = 8000
//const server = http.createServer(function (req, res) {
// fs.readFile('index.html', function(err, data) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write(data);
// res.end();
// });
// })

//server.listen(port, (err) =>)
