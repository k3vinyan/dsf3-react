const express = require('express');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 3000);

app.use(express.static('src'));

app.get('/', function(req, res){
  res.send('Express Works');
});

app.listen(app.get('port'), function(){
  console.log("Running on port: " + app.get('port'));
})
