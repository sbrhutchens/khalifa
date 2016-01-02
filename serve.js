var Server = {};

Server.start = function(http, serverPort) {

  this.execute = function() {
    http.createServer(function(req,res) {
      var url = require('url'),
          fs = require('fs'),
          router = require('./route');

      router.route(req, res, url, fs);
      console.log('Your app is serving at ' + serverPort);
    }).listen(serverPort);
  }

  return this.execute()
}

exports.start = Server.start
