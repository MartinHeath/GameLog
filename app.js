var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(2662, function(){
  console.log('Listening for port 2662');
});
