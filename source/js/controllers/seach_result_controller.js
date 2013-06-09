Sapporojs.SearchResultController = Ember.ArrayController.extend({
  showModal: false,
  query: null,
  blogs: Ember.A(),

  searchRegExps: Ember.computed(function() {
    var query = this.get('query');
    var escaped = String(query).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var queries = Ember.A(escaped.split(/ +/)).filter(Boolean);

    return queries.map(function(q) {
      return new RegExp(q, 'i');
    });
  }).property('query'),

  content: Ember.computed(function() {
    var searchRegExps = this.get('searchRegExps');

    var result = this.get('blogs').filter(function(blog) {
      return searchRegExps.every(function(reg) {
        return blog.isMatchedWith(reg);
      })
    });

    return result;
  }).property('searchRegExps')
});
