// TODO Extract to other files

Ember.TEMPLATES['search/form'] = Ember.Handlebars.compile([
  '{{#view Sapporojs.SearchView}}',
    '{{view Sapporojs.SearchTextFieldView}}',
   '{{/view}}',
   '{{view Sapporojs.SearchResultView}}'
].join(''));
