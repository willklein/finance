
/**
 * Initialize a `Dialog` with the given `html`.
 *
 * @param {String} html or id
 * @api public
 */

function Dialog(html) {
  var self = this;
  if ('#' == html[0]) html = j(html).html();
  this.overlay = j('#overlay');
  this.el = j('<div class="dialog">' + html + '</div>');
  this.overlay.click(function(){ self.hide(); });
  j(window).resize(function(){ self.resize(); });
}

/**
 * Hide the dialog.
 *
 * @return {Dialog} for chaining
 * @api public
 */

Dialog.prototype.hide = function(){
  this.el.remove();
  this.overlay.addClass('hide');
  return this;
};

/**
 * Show the dialog.
 *
 * @return {Dialog} for chaining
 * @api public
 */

Dialog.prototype.show = function(){
  var el = this.el;
  el.appendTo('body');
  this.overlay.removeClass('hide');
  this.resize();
  return this;
};

/**
 * Resize the dialog.
 *
 * @return {Dialog} for chaining
 * @api public
 */

Dialog.prototype.resize = function(){
  var el = this.el;

  el.css({
      top: (window.innerHeight / 2) - el.height() / 2
    , left: (window.innerWidth / 2) - el.width() / 2
  });

  return this;
};

/**
 * Display confirmation `msg`.
 *
 * @param {String} msg
 * @param {Function} fn
 */

Dialog.confirm = function(msg, fn) {
  var dialog = new Dialog('#confirm');

  function reply(val) {
    return function(){
      dialog.hide();
      fn(val);
    }
  }

  dialog.el
    .find('.message').text(msg).end()
    .find('.ok').click(reply(true)).focus().end()
    .find('.cancel').click(reply(false));

  dialog.show();
};

