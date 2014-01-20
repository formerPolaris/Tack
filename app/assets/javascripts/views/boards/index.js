PinterestClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],

  render: function () {
    var renderedContent = this.template({
      boards: this.collection,
      users: this.users
    });
    
    this.$el.append(renderedContent);

    return this;
  }
});