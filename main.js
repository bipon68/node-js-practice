var http = require('http');

var server =  http.createServer(function (req, res){
    
    // res.end('Hello World, listen 5050 port')

    if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h2>This is Home page</h2>')
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h2>This is About page</h2>')
        res.end();
    }
    else if(req.url=='/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h2>This is Contact page</h2>')
        res.end();
    }

});

server.listen(5050);
console.log('Server run ! listen 5050 port')