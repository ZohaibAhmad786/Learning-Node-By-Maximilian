const http=require('http') // core module

var module = require('./module1')

function onCreateServer(request, response) {

    response.writeHead(200,{"Content-type": "text/plain"});

    response.write(module.myFunction)

    response.end()
}

http.createServer(onCreateServer).listen(8000)