var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/home', function (req, res) {
  var email = req.query.email; 
  console.log(email);
   res.sendFile( __dirname + "/client/" + "index.html" );
})

app.post('/', function (req, res) {

   // Prepare output in JSON format
   var response = {
       first_name:req.body.email
   };
   console.log(response);
   res.sendFile( __dirname + "/client/" + "index.html" );
})

app.post('/registeremail',urlencodedParser, function (req, res) {

   var response = {
       email:req.body.email
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("app started listening at http://%s:%s", host, port)

})
