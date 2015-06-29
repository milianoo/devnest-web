var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/contacts', function (req, res) {
  console.log("contacts requested.");
   res.sendFile( __dirname + "/" + "contacts.csv" );
})

app.post('/registeremail',urlencodedParser, function (req, res) {

   var email = req.body.email;
   
   fs.appendFile('contacts.csv', email + '\n', function (err) {
		if (err) return console.log(err);
	});
   
   res.sendFile( __dirname + "/client/" + "index.html" );
})

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("app started listening at http://%s:%s", host, port)

})
