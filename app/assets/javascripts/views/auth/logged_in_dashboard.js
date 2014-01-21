PinterestClone.Views.LoggedInDashboardView = Backbone.View.extend ({
  template: JST["auth/logged_in_dashboard"],
  render: function () {
    return this.template();
  }
});