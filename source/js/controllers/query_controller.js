Sapporojs.QueryController = Ember.ObjectController.extend({
  content: null,

  searchQueries: Ember.computed(function() {
    var query = this.get('content');
    var escaped = String(query).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var queries = Ember.A(escaped.split(/ +/)).filter(Boolean);

    return queries.map(function(q) {
      return new RegExp(q, 'i');
    });
  }).property('content')
});
