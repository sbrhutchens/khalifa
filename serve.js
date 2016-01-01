var Server = {};

Server.start = function(http, serverPort) {

  this.execute = function() {
    http.createServer(function(req,res) {
      res.writeHead(200, {
        'Content-Type' : 'text/html'
      });
      res.end('This is where views will be rendered');
      console.log('Your app has started at port ' + serverPort);
    }).listen(serverPort);
  }

  return this.execute()
}

exports.start = Server.start
