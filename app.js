var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Happy Birthday Marcus Peterson!  You are my best friend.  You are an amazing person.  I hope you have a fantastic birthday!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});