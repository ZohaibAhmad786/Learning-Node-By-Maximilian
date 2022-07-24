const http=require('http') // core module


function onCreateServer(request, response) {

    response.writeHead(200,{"Content-type": "text/plain"});

    response.write("Hello world")

    response.end()
}

http.createServer(onCreateServer).listen(8000)