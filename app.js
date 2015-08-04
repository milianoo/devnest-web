/* jshint -W079 */
(function() {
    var bodyParser = require('body-parser'),
        express = require('express'),
        routes = require('./routes'),
        path = require('path'),
        app = express();
        
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        
        app.use(express.static(path.join(__dirname, 'public')));
        app.set('views', __dirname + '/views');
        
        // Create application/x-www-form-urlencoded parser
        app.use(bodyParser.urlencoded({ extended: true }));
        
        
        // serve index and view partials
        app.get('/', routes.index);
        app.get('/partials/:name', routes.partials);

        // redirect all others to the index (HTML5 history)
        app.get('*', routes.index);
        
        var server = app.listen(process.env.PORT || 5000, function () {
            var port = server.address().port;
            console.log("devnest app started at port %s", port);
        });

})();