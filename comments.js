// create web server
// 1. load http module
var http = require('http');
// 2. create web server object
var server = http.createServer();
// 3. start web server with port #
server.listen(3000, function() {
    console.log('Server is running on port 3000');
});
// 4. handling request event
server.on('connection', function(socket) {
    console.log('Client connected');
});
server.on('request', function(req, res) {
    console.log('Client request');
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>안녕하세요</h1>');
    res.end();
});
server.on('close', function() {
    console.log('Server closed');
});
// 5. handling error event
server.on('error', function(err) {
    console.log('Error: %s', err.message);
});