// TODO Rewrite with handlebars

Ember.TEMPLATES['search/form'] = Ember.Handlebars.compile([
  '{{#view Sapporojs.SearchView}}',
    '{{view Sapporojs.SearchTextFieldView valueBinding=controller.query}}',
   '{{/view}}',
   '{{view Sapporojs.SearchResultView}}'
].join(''));
