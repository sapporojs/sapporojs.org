Sapporojs.SearchResultController = Ember.ObjectController.extend({
  needs: ['query'],

  isMatchedQueries: Ember.computed(function() {
    var title   = this.get('title');
    var text    = this.get('text');
    var queries = this.get('controllers.query.searchQueries');

    return queries.any(function(query) {
      return title.match(query) || text.match(query);
    });
  }).property('controllers.query.content')
});
