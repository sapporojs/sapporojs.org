Ember.TEMPLATES['search_result'] = Ember.Handlebars.compile([
  '<div id="modal-container">',
    '<h2>Search Result</h2>',
    '{{view Sapporojs.SearchTextFieldView}}',
    '{{#if controller.length}}',
      '<ul>',
        '{{#each controller}}',
          '<li><a {{bindAttr href=url}}>{{title}}</a></li>',
        '{{/each}}',
      '</ul>',
    '{{else}}',
      '<div>Not Found</div>',
    '{{/if}}',
  '</div>',
  '{{view Sapporojs.ModalBgView controllerBinding="controller"}}'
].join(''));
