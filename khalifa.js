var http = require('http'),
    server = require('./serve.js'),
    serverPort = process.env.PORT || 3000;

server.start(http, serverPort);
