Sapporojs.SearchResultsRoute = Ember.Route.extend({
  model: function() {
    return Sapporojs.Blog.all();
  },

  renderTemplate: function() {
    var controller = this.controllerFor('searchResults');

    this.render('search_form', {
      controller: controller
    });
  }
});
