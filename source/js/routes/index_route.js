Sapporojs.IndexRoute = Ember.Route.extend({
  model: function() {
    return Sapporojs.Blog.all();
  },

  setupController: function(controller, model) {
    this.controllerFor('searchResult').set('blogs', model);
  },

  renderTemplate: function() {
    var controller = this.controllerFor('searchResult');

    this.render('search_form', {
      controller: controller
    });
  }
})
