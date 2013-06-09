Sapporojs.SearchView = Ember.View.extend({
  elementId: 'search-form',
  tagName: 'form',

  submit: function(e) {
    var query = this.get('controller.query');

    if (!query) {
      return false;
    }

    var controller = this.get('controller');
    controller.set('showModal', true);

    return false;
  }
});

Sapporojs.SearchTextFieldView = Ember.TextField.extend({
  name: 'query',
  classNames: ['search-textfield'],
  autocomplete: 'off',
  autocorrect: 'off',
  autocapitalize: 'off',
  attributeBindings: ['autocomplete', 'autocorrect', 'autocapitalize'],

  valueBinding: 'controller.query'
});

Sapporojs.SearchResultView = Ember.View.extend({
  elementId: 'search-result',
  templateName: 'search_result',

  updateModal: function() {
    if (this.get('controller.showModal')) {
      this.$().fadeIn();
    } else {
      this.$().fadeOut();
    }
  },

  showModalDidChange: Ember.observer(function() {
    this.updateModal();
  }, 'controller.showModal'),
});

Sapporojs.SearchResultTextView = Ember.View.extend({
  tagName: 'span',
  templateName: 'search_result_text',
  classNames: ['search-result-text'],

  resultText: Ember.computed(function() {
    var count = this.get('controller.length');

    if (count <= 0) {
      return '';
    } else if (count === 1) {
      return 'result'
    } else {
      return 'results';
    }
  }).property('controller.length')
});

Sapporojs.ModalBgView = Ember.View.extend({
  elementId: 'modal-background',

  click: function(e) {
    this.get('controller').set('showModal', false);

    return false;
  }
});
