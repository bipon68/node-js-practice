// const { write } = require('fs');
var fs = require('fs');
var http = require('http');
var URL = require('url');

var server =  http.createServer(function (req, res){
    
    // res.end('Hello World, listen 5050 port')

    var myURL="http://bipon.me/blog.html?year=2020&month=july";
    var myURLObj = URL.parse(myURL, true)
    var myHostName = myURLObj.host;
    var myPathName = myURLObj.pathname;
    var mySearchName = myURLObj.search;

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(myHostName);
    res.end();

    // if(req.url=='/'){
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.write('<h2>This is Home page</h2>')
    //     res.end();
    // }
    // else if(req.url=='/about'){
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.write('<h2>This is About page</h2>')
    //     res.end();
    // }
    // else if(req.url=='/contact'){
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.write('<h2>This is Contact page</h2>')
    //     res.end();
    // }

});

server.listen(5050);
console.log('Server run ! listen 5050 port')