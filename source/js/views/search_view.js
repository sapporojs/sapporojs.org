//=require ../controllers/seach_result_controller

Sapporojs.SearchView = Ember.View.extend({
  tagName: 'form',

  controller: Sapporojs.searchResultController,

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
  valueBinding: 'controller.query'
});

Sapporojs.SearchResultView = Ember.View.extend({
  elementId: 'search-result',
  templateName: 'search_result',

  controller: Sapporojs.searchResultController,

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

// Sapporojs.ModalView = Ember.View.extend({
// });

Sapporojs.ModalBgView = Ember.View.extend({
  elementId: 'modal-background',

  click: function(e) {
    this.get('controller').set('showModal', false);

    return false;
  }
});
