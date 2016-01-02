var template = require('../views/helpers/views');
var ViewController = {};

ViewController.generateContent = function(req,res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(template.create("Thank you for using Khalifa.js", "Hello world", "<span>Welcome to the homepage!</span>"));
}

exports.generateContent = ViewController.generateContent
