exports.sendmail = function (req,res) {
    var name = req.body.name;
    var from = req.body.email;
    var msgbody = req.body.body;
    
    var sendgrid = require("sendgrid")(process.env.SENDGRID_API_KEY);
    var email = new sendgrid.Email();
    
    email.setTos(['milad@devnest.io','amir@devnest.io']);
    email.setFrom(from);
    email.setSubject("Message from " + name);
    email.setHtml(msgbody);
    
    // add filter settings one at a time
    email.addFilter('templates', 'enable', 1);
    email.addFilter('templates', 'template_id', 'bd8ef75c-29fe-421c-b0bb-d2a16144b6f5');
    
    sendgrid.send(email, function(err, json) {
      if (err) { 
          console.log(err);
          res.redirect('/contact');
      }
      console.log(json);
      res.end();
    });
}

exports.register = function (req,res) {
    var _name = req.body.name;
    var _from = req.body.email;
    var _position = req.body.position;
    var _company = req.body.company;
    
    var contact = _name + "," + _from + "," + _position + "," + _company;
    
    var fs = require('fs');
    fs.appendFile('contacts.txt', contact +'\n' , function (err) {
      if (err) return console.log(err);
      console.log('new contact added. [' + contact + ']');
    });
    
    init(function(db){
        insert(db,[{name: _name, email: _from, position: _position, company : _company}], 'Attendees', function(result) {
            
            var sendgrid = require("sendgrid")(process.env.SENDGRID_API_KEY);
            var email = new sendgrid.Email();
            
            email.setTos([_from]);
            email.setFrom('amir@devnest.io');
            email.setSubject("Thank you " + _name);
            email.setHtml(_name);
            
            // add filter settings one at a time
            email.addFilter('templates', 'enable', 1);
            email.addFilter('templates', 'template_id', 'bd8ef75c-29fe-421c-b0bb-d2a16144b6f5');
            
            sendgrid.send(email);
          res.send(result);
          
        });
    });
}

exports.listContacts = function (req,res){
   init(function(db){
       list(db,'Attendees', function(result) {
          res.send(result);
       }); 
    });
}

var init = function(callback) {
    var mongo = require('mongodb');
    var Server = mongo.Server;
    var Db = mongo.Db;
    
    //mongodb://<dbuser>:<dbpassword>@ds057862.mongolab.com:57862/devnest-web
    var server = new Server(process.env.MONGO_SERVER_NAME, process.env.MONGO_SERVER_PORT, {
        auto_reconnect: true
    });
    var db = new Db('devnest-web', server);
    db.open(function(err, client) {
        if (err) {
            console.log(err);
            return;
        }
        client.authenticate(process.env.MONGO_USER_ADMIN, process.env.MONGO_ADMIN_PASSWORD, function(err, success) {
            if (err) {
                console.log(err);
                return;
            }
            if (success) {
               callback(db); 
            }
        });
    });
}

var insert = function(db, items, collectionName, callback){
    var collection = db.collection(collectionName);
    // Insert some documents
    collection.insert(items, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        callback(result);
    });
}

var list = function(db, collectionName, callback){
    var collection = db.collection(collectionName);
    collection.find({}).toArray(function(err, docs) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(docs);
        callback(docs);
    });
}
