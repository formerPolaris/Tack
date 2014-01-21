PinterestClone.Views.LoggedInButtonsView = Backbone.View.extend ({
  template: JST["auth/logged_in_buttons"],
  render: function () {
    return this.template();
  }
});