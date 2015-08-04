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