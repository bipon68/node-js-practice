var http = require('http');

var server =  http.createServer(function (req, res){
    res.end('Hello World, listen 5050 port')
});

server.listen(5050);
console.log('Server run ! listen 5050 port')