jQuery(function($) {
  var REPO_NAME = 'sapporojs/sapporojs.github.com';
  var MAX_MESSAGE_LENGTH = 30;

  // method definition
  var getUpdates = function(callback) {
    $.get(
      'https://api.github.com/repos/'+REPO_NAME+'/commits',
      callback,
      'jsonp'
    );
  };

  var updateMessageTemplate = _.template([
      '<li>'
    ,   '<div class="commit-row">'
    ,     '<span class="author-icon">'
    ,       '<a href="https://github.com/<%- author.login %>" target="_blank">'
    ,         '<img src="<%- author.avatar_url %>" />'
    ,       '</a>'
    ,     '</span>'
    ,     '<span class="commit-info">'
    ,       '<a href="https://github.com/'+REPO_NAME+'/commit/<%- sha %>" target="_blank">'
    ,         '<% if (commit.message.length < '+MAX_MESSAGE_LENGTH+') { %>'
    ,            '<%- commit.message %>'
    ,         '<% } else { %>'
    ,            '<%- commit.message.split("").splice(0, '+MAX_MESSAGE_LENGTH+').join("") %>...'
    ,         '<% } %>'
    ,       '</a>'
    ,       '<div class="authorship">'
    ,         '<a href="https://github.com/<%- author.login %>" target="_blank">'
    ,           '<%- author.login %>'
    ,         '</a>'
    ,         '<time class="js-relative-date" datatime="<%- commit.author.date %>">'
    ,           '<%- commit.author.date %>'
    ,         '</time>'
    ,       '</div>'
    ,     '</span>'
    ,   '</div>'
    , '</li>'
  ].join(''));

  var showUpdates = function(res) {
    var data = res.data;
    var $updateArea = $('ul.updates');
    $updateArea.empty();
    _.times(10, function(i) {
      var gh_event = data[i];
      $row = $(updateMessageTemplate(gh_event));
      $updateArea.append($row);
    });

    $('.js-relative-date').relativeDate();
  };

  // run
  getUpdates(showUpdates);
});
