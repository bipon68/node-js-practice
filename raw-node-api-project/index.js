/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: 
 * Date: 26/11/2020
 */

 // npm install - g nodemon
// dependencies
const http = require('http');
const url = require('url');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
}

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRest);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`)
    })
}

// handle request response
app.handleReqRest = (req, res) => {
    // request handing 
    // get the url and parse it
    const parseUrl = url.parse(req.url, true)
    //console.log(parseUrl)
    
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;
    console.log(headersObject)
    // response handle
    res.end('Hello man!')
}

// start the server
app.createServer();