var fs = require('fs');
var vhost = require('vhost');
var express = require('express');
var http = require('http');
var app = express();
var NodeHost = require('./nodeIP.json')
var host = NodeHost.host
var port = NodeHost.port
app.use(vhost(host, require('./index.js').app));
var httpServer = http.createServer(app);
httpServer.listen(port);
