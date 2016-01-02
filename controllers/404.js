var template = require('../views/helpers/views');
var ViewController = {};

ViewController.generateContent = function(req,res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.end(template.create("Thank you for using Khalifa.js", "What are you really looking for?", "<span>You look completely lost!</span>"));
}

exports.generateContent = ViewController.generateContent
