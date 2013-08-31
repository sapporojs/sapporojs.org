Sapporojs.SearchResultsController = Ember.ArrayController.extend({
  showModal: false,
  query: null,
  blogs: Ember.A(),

  searchQueries: Ember.computed(function() {
    var query = this.get('query');
    var escaped = String(query).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var queries = Ember.A(escaped.split(/ +/)).filter(Boolean);

    return queries.map(function(q) {
      return new RegExp(q, 'i');
    });
  }).property('query'),

  content: Ember.computed(function() {
    var searchQueries = this.get('searchQueries');

    var result = this.get('blogs').filter(function(blog) {
      return searchQueries.every(function(reg) {
        return blog.isMatchedWith(reg);
      })
    });

    return result;
  }).property('searchQueries')
});
