const http = require('http');
const { getProducts } = require('./controllers/productController')
// const products = require('./data/products');

const server =  http.createServer((req, res) => {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h2>Hello World</h2>')
    // res.end()
    if(req.url === '/api/products' && req.method === 'GET'){
        getProducts(req, res)

        
        // res.writeHead(200, {'Content-Type': 'application/json'})
        // res.end(JSON.stringify(products))
    }else{
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }

    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))