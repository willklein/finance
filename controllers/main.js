
/**
 * Module dependencies.
 */

var utils = require('../lib/helpers');

exports.index = function(req, res){
  var month = utils.monthName(new Date().getMonth()).toLowerCase();
  res.redirect('/month/' + month);
};