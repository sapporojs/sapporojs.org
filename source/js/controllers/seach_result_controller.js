// TODO Use this as class
Sapporojs.searchResultController = Ember.ArrayController.extend({
  showModal: false,
  query: null,

  content: Ember.computed(function() {
    var query = this.get('query');
    var escaped = String(query).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var queryRegExp = new RegExp(escaped, 'i');

    var result = Sapporojs.Blog.all().filter(function(blog) {
      return blog.isMatchedWith(queryRegExp);
    });
    return result;
  }).property('query')
}).create();
