const http = require('http') // core module
var fs = require('fs');

function onCreateServer(request, response) {

    response.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("./index.html", null, function (err, data) {
        if (err) {
            response.writeHead(404);
            response.write("File not found!")
        } else {
            response.write(data);
        }
        response.end();
    })
}

http.createServer(onCreateServer).listen(8000)