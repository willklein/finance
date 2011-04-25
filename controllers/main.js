
/**
 * Module dependencies.
 */

var utils = require('../lib/helpers');

exports.index = function(req, res){
  var month = utils.monthName(new Date().getMonth()).toLowerCase();
  res.redirect('/month/' + month);
};

exports.updateConfig = function(req, res){
  var config = req.body;
  config.bracket = parseInt(config.bracket, 10);
  for (var key in config) db.config[key] = config[key];
  db.save();
  res.redirect('back');
};