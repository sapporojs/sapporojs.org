//=require_self
//
//=require_tree ./models
//=require_tree ./controllers
//=require_tree ./views
//=require_tree ./templates
//=require_tree ./routes
//=require router

Sapporojs = Ember.Application.create({
  rootElement: '#search-application',

  LOG_TRANSITIONS:  ENV.BUILD_ENV === 'development',
  LOG_VIEW_LOOKUPS: ENV.BUILD_ENV === 'development'
});
