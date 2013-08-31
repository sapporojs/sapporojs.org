Sapporojs.SearchResultController = Ember.ObjectController.extend({
  needs: ['query'],

  isMatchedQueries: Ember.computed(function() {
    var title   = this.get('title');
    var text    = this.get('text');
    var queries = this.get('controllers.query.searchQueries');

    return queries.any(function(query) {
      return title.match(query) || text.match(query);
    });
  }).property('controllers.query.content'),

  highlightQuery: Ember.computed(function() {
    var summary = this.get('summary_text');
    var queries = this.get('controllers.query.searchQueries');

    var sources = queries.map(function(query) {
      return query.source;
    });

    return new RegExp(sources.join('|'), 'ig');
  }).property('controllers.query.content'),

  highlightSummary: Ember.computed(function() {
    var text  = this.get('summary_text');
    var query = this.get('highlightQuery');

    var highlighted = text.replace(query, function(matched) {
      return '<strong><i>' + matched + '</i></strong>';
    });

    return Ember.String.htmlSafe(highlighted);
  }).property('summary_text', 'controllers.query.content')
});
