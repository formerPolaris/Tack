PinterestClone.Views.LoggedInView = Backbone.View.extend ({
  template: JST["auth/logged_in"],
  render: function () {
    this.$el.append(this.template);
    return this;
  }
});