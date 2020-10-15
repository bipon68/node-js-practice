var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){

    if(req.url='/'){

        //Async
        // fs.readFile('home.html', function (error, data){
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // })

        //Sync
        // let myData = fs.readFileSync('home.html');
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(myData);
        //     res.end();


            //write using async
            // fs.writeFile('demo.txt', 'Hello World. Man!', function (error){
            //     if(error){
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write('File write fail');
            //         res.end();
            //     }else{
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write('File write success');
            //         res.end();
            //     }
            // })

            // write using sync
            // let error = fs.writeFileSync('demoSync.txt', 'Welcome to file. Using Sync')

            // if(error){
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.write('File write fail');
            //     res.end();
            // }else{
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.write('File write success');
            //     res.end();
            // }

            // rename using Async
            // fs.rename('demo.txt', 'demoNew.txt', function(error){
            //     if(error){
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write('File rename fail');
            //         res.end();
            //     }else{
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write('File rename success');
            //         res.end();
            //     }
            // })

            // rename using Sync
            // let error = fs.renameSync('demoNewSync3.txt', 'demoNewSync4.txt');

            // file delete async
            // fs.unlink('demoNewSync4.txt', function(error){
            //     if(error){
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write('File delete fail');
            //         res.end();
            //     }else{
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write('File delete success');
            //         res.end();
            //     }
            // })

             // file delete sync
            // let error = fs.unlinkSync('demoNewSync.txt')
            // if(error){
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.write('File delete fail');
            //     res.end();
            // }else{
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.write('File delete success');
            //     res.end();
            // }

            fs.exists('demo.txt', function (result){
                if(result){
                    res.end("File exist")
                }else{
                    res.end("File don't exist")
                }
            });
            


        }
})

server.listen(4040);
console.log('server run 4040 port. Success')