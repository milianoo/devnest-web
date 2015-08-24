/*
 * home page router
 */
 
 // render index page
exports.index = function (req, res){
    res.render('index.html');
}

// render partial pages 
exports.partials = function (req, res) {
 var name = req.params.name;
 res.render('partials/' + name);
};

 // render index page
exports.company = function (req, res){
    var name = req.params.name;
 res.render('company/' + name);
}

exports.meetup = function (req, res){
    var name = req.params.name;
 res.render('meetup/' + name);
}