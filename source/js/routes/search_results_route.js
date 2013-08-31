Sapporojs.SearchResultsRoute = Ember.Route.extend({
  model: function() {
    return Sapporojs.Blog.all();
  },

  setupController: function(controller, model) {
    this.controllerFor('searchResults').set('blogs', model);
  },

  renderTemplate: function() {
    var controller = this.controllerFor('searchResults');

    this.render('search_form', {
      controller: controller
    });
  }
});
