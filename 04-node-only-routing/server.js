const http = require('http') // core module
var app = require('./app')

http.createServer(app.handleRoutings).listen(8000)