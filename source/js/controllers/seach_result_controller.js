Sapporojs.SearchResultController = Ember.ArrayController.extend({
  showModal: false,
  query: null,
  blogs: Ember.A(),

  content: Ember.computed(function() {
    var query = this.get('query');
    var escaped = String(query).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var queryRegExp = new RegExp(escaped, 'i');

    var result = this.get('blogs').filter(function(blog) {
      return blog.isMatchedWith(queryRegExp);
    });

    return result;
  }).property('query')
});
