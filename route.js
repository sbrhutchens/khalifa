var Router = {};

Router.route = function(req, res, url, fs) {
  req.reqUrl = url.parse(req.url, true);

  var pathName = req.reqUrl.pathname,
      checkIfCss = /.(css)$/;

  if (checkIfCss.test(pathName)) {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    fs.readFile(__dirname + pathName, 'utf8', function(err, data) {
      if (err) throw err;
      res.end(data, 'utf8');
    });
  } else {
    if (pathName === '/') {
      var mainController = require('./controllers/main');
      mainController.generateContent(req, res);
    } else {
      var lostController = require('./controllers/404');
      lostController.generateContent(req, res);
    }
  }
}

exports.route = Router.route
