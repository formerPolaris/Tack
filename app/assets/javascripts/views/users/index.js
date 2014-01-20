PinterestClone.Views.UsersIndex = Backbone.View.extend({
  template: JST['users/index'],

  render: function () {
    var renderedContent = this.template({
      users: this.collection
    });
    
    this.$el.append(renderedContent);

    return this;
  }
});