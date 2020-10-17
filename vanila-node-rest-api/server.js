const http = require('http');
const { getProducts, getProduct, createProduct, updateProduct } = require('./controllers/productController')
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
    }else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){

        const id = req.url.split('/')[3] //api/products/1
        getProduct(req, res, id)

    }else if(req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res)

    }else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT'){
        const id = req.url.split('/')[3] //api/products/1
        updateProduct(req, res, id)

    }
    else{
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }

    
})

// /api/products
// req.params.id

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))