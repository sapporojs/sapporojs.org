var Cursor = (function($) {
  var cursors = {};
  var randomColor = function() {
    return $.map([0, 0, 0], function() {
      return Math.floor(Math.random() * 256);
    });
  }

  function Cursor() {
  var color = randomColor().join(',');
    this.body = $('<div />')
      .height(14)
      .width(14)
      .css('border-radius', 7)
      .css('position', 'fixed')
      .css('background-color', "rgb(" + color + ")") // for CSS2
      .css('background-color', "rgba(" + color + ", 0.3)");
  }

  Cursor.prototype.appear = function() {
    this.body.appendTo(document.body);
    return this;
  }
  Cursor.prototype.update = function(x, y) {
    this.body.css('left', x).css('top', y);
  }
  Cursor.prototype.remove = function() {
    this.body.remove();
  }

  Cursor.add = function(id) {
    return cursors[id] = new Cursor(id).appear();
  }
  Cursor.get = function(id) {
    return cursors[id] = cursors[id] || this.add(id);
  }
  Cursor.remove = function(id) {
    cursors[id].remove();
    return delete cursors[id];
  }

  return Cursor;
})(jQuery);
