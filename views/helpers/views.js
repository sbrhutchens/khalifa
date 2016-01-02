var View = {},
    fs = require('fs'),
    path = require('path');

View.buildLayout = function(title, description, content) {

  var html = fs.readFileSync(path.resolve(__dirname, '../main.html'), 'utf8');
  var title = html.replace(/{{title}}/g, title);
  var description = title.replace(/{{description}}/g, description);
  var content = description.replace(/{{content}}/g, content);

  return content;
}

exports.create = View.buildLayout
