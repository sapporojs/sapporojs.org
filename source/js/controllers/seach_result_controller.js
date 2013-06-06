// TODO Use this as class
Sapporojs.searchResultController = Ember.ArrayController.extend({
  showModal: false,
  query: null,

  content: Ember.computed(function() {
    var query = this.get('query');

    var result = Sapporojs.Blog.findAll().filter(function(blog) {
      var title = blog.get('title');
      var text = blog.get('text');

      return title.match(query) || text.match(query);
    });
    return result;
  }).property('query')
}).create();
