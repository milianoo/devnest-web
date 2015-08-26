/* jshint -W079 */
// this is to prevent creating global variable 
// it is called Immediatly Invoked Function Experssion IIFE
(function() {
    var bodyParser = require('body-parser'),
        express = require('express'),
        routes = require('./routes'),
        api = require('./routes/api'),
        path = require('path'),
        app = express();
        
        // set to load html (can not render html without ejs)
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        
        // set public folder and view folder
        app.use(express.static(path.join(__dirname, 'public')));
        app.set('views', __dirname + '/views');
        
        // Create application/x-www-form-urlencoded parser
        app.use(bodyParser.urlencoded({ extended: true }));
        
        // serve index and view partials
        app.get('/', routes.index);
        app.get('/partials/:name', routes.partials);
        app.get('/company/:name', routes.company);
        app.get('/meetup/:name', routes.meetup);
        
        app.post('/api/sendmail', api.sendmail);
        app.get('api/getcontacts',api.getcontacts);
        app.post('/api/register', api.register);
        
        app.get('/api/list', api.listContacts);

        // redirect all others to the index (HTML5 history)
        app.get('*', routes.index);
        
        // start server
        var server = app.listen(process.env.PORT || 5000, function () {
            var port = server.address().port;
            console.log("devnest app started at port %s", port);
        });

})();
