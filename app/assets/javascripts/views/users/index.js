PinterestClone.Views.UsersIndex = Backbone.View.extend({
  template: JST['users/index'],

  render: function () {
    PinterestClone.resetActives();
    $('#users-link').addClass("active");
    var renderedContent = this.template({
      users: this.collection
    });
    
    this.$el.html(renderedContent);

    return this;
  }
});