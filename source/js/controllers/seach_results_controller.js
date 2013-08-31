Sapporojs.SearchResultsController = Ember.ArrayController.extend({
  itemController: 'searchResult',

  needs: ['query'],

  showModal: false,

  matchedCount: Ember.computed(function() {
    var matched = this.filter(function(blog) {
      return blog.get('isMatchedQueries');
    })
    return matched.length;
  }).property('content.[]', 'controllers.query.content')
});
