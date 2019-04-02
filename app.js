// var express = require('express');
// var app = express();
//
// app.listen(3000, function () {
//   console.log('Gif Search listening on port localhost:3000!');
// });
var express = require('express');
var app = express();

app.get('/hello-squirrel', function (req, res) {
  res.send('Hello Squirrel');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-gif', function (req, res) {
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
})

app.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.render('greetings', {name: name});
})
