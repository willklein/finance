
/**
 * Module dependencies.
 */

var utils = require('../lib/helpers');

exports.show = function(req, res){
  var month = utils.monthNumber(req.params.month)
    , items = db.months[month].items;

  res.expose({ month: month, settings: db.settings })
     .render('month', { month: month, items: items });
};