Sapporojs.Blog = Ember.Object.extend({});

Sapporojs.Blog.reopenClass({
  _content: Ember.A(),

  _loaded: false,

  findAll: function() {
    var content = Sapporojs.Blog._content;

    if (Sapporojs.Blog._loaded) {
      return content;
    }
    Sapporojs.Blog._loaded = true;

    Ember.$.get('/api/blogs.json').then(function(json) {
      var forEach = Ember.ArrayPolyfills.forEach;

      forEach.call(json, function(blogData) {
        var blog = Sapporojs.Blog.create(blogData);

        content.pushObject(blog);
      });
    });

    return content;
  }
});
Sapporojs.Blog.findAll(); // eager load...
