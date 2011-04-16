
exports.index = function(req, res){
  res.redirect('/month/' + new Date().getMonth());
};