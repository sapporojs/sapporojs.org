Sapporojs.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('searchResults');
  }
});
