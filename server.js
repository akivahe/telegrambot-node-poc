var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile('./index.html');
});
console.log(process.argv);
if(process.argv.indexOf("--production") > -1){
 port = 80;
}

app.listen(port , function () {
  console.log('Example app listening on port ' + port );
});
