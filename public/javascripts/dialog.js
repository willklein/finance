
/**
 * Initialize a `Dialog` with the given `html`.
 *
 * @param {String} html
 * @api public
 */

function Dialog(html) {
  var self = this;
  this.overlay = j('#overlay');
  this.el = j('<div class="dialog">' + html + '</div>');
  j(window).resize(function(){
    self.resize();
  });
}

/**
 * Hide the dialog.
 *
 * @api public
 */

Dialog.prototype.hide = function(){
  this.el.remove();
  this.overlay.addClass('hide');
};

/**
 * Show the dialog.
 *
 * @api public
 */

Dialog.prototype.show = function(){
  var el = this.el;
  el.appendTo('body');
  this.overlay.removeClass('hide');
  this.resize();
};

/**
 * Resize the dialog.
 *
 * @api public
 */

Dialog.prototype.resize = function(){
  var el = this.el;

  el.css({
      top: (window.innerHeight / 2) - el.height() / 2
    , left: (window.innerWidth / 2) - el.width() / 2
  });
};

