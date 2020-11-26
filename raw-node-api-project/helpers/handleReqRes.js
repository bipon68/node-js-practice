/**
 * Title: Handle Request Response
 * Description:  Handle Request and Response
 * Date: 25/11/2020
 */

 // dependencies
 const url = require('url');
 const {StringDecoder} = require('string_decoder');

 // module scaffolding
 const handler = {};

 handler.handleReqRes = (req, res) => {
    // request handing 
    // get the url and parse it
    const parseUrl = url.parse(req.url, true)
    //console.log(parseUrl)
    
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8')
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData)
        res.end('Hello world!')
    })


    console.log(headersObject)
    // response handle
    // res.end('Hello man!')
}
 module.exports = handler;