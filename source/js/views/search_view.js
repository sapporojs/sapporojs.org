//=require ../controllers/seach_result_controller

Sapporojs.SearchView = Ember.View.extend({
  tagName: 'form',

  controller: Sapporojs.searchResultController,

  submit: function(e) {
    var query = this.get('controller.query');

    if (!query) {
      return false;
    }

    var result = Sapporojs.Blog.findAll().filter(function(blog) {
      var title = blog.get('title');
      var text = blog.get('text');

      return title.match(query) || text.match(query);
    });

    var controller = this.get('controller');

    controller.set('content', result);
    controller.set('showModal', true);

    return false;
  }
});

Sapporojs.SearchTextFieldView = Ember.TextField.extend({
  name: 'query',

  input: function() {
    this.get('controller').set('query', this.$().val());
  }
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
