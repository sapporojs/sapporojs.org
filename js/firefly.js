var Cursor = (function($) {
  var cursors = {};
  var randomColor = function() {
    return $.map(['red', 'green', 'blue'], function() {
      return Math.floor(Math.random() * 256);
    });
  }

  function Cursor() {
    var color = randomColor().join(',');
    this.body = $('<div />')
      .css({
        'height': 14,
        'width': 14,
        'border-radius': 7,
        'position': 'fixed',
        'background-color': "rgb(" + color + ")"
      })
      .css('background-color', "rgba(" + color + ", 0.3)"); // for CSS3
  }

  Cursor.prototype.appear = function() {
    this.body.appendTo(document.body);
    return this;
  }
  Cursor.prototype.update = function(x, y) {
    this.body.css({'left': x, 'top': y});
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
    var cursor = cursors[id];
    if (cursor) {
      cursor.remove();
    }
    return delete cursor;
  }

  return Cursor;
})(jQuery);

jQuery(function($) {
  var socket = io.connect('http://sapporojs.no.de/');

  socket.on('info', function (data) {
    console.log(JSON.stringify(data));
  });
  socket.on('entry cursor', function(data) {
    Cursor.add(data.id);
  });
  socket.on('move cursor', function(data) {
    var screen = data.screen;
    var cursor = Cursor.get(data.id);
    cursor.update(
      screen.x * w.width() / screen.width,
      screen.y * w.height() / screen.height
    );
  });
  socket.on('disconnect', function(data) {
    Cursor.remove(data.id);
  });

  var w = $(window);
  w.mousemove(function(e) {
    socket.emit('mouse position', {
      width:  w.width(),
      height: w.height(),
      x: e.clientX,
      y: e.clientY
    });
  });

  var counter = $('<div />');
  counter
    .attr('align', 'center')
    .css({
      'font-size': '3em',
      'line-height': '1',
      'top': 0,
      'left': w.width() - counter.width(),
      'width': 50,
      'height': 50,
      'border-radius': 25,
      'position': 'fixed',
      'color': 'white',
      'background-color': "rgb(128,30,0)"
    })
    .css('background-color', "rgba(128,30,0,0.4)") // for CSS3
    .appendTo(document.body);
  var notifyCount = function(count) {
    counter
      .css('left', w.width() - counter.width())
      .text(count)
      .fadeIn(3000, function() {
        counter.fadeOut(2000);
      });
  }
  socket.on('change count', function(data) {
    notifyCount(data.clientCount);
  });
});
