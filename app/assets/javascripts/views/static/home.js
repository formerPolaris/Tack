PinterestClone.Views.HomeView = Backbone.View.extend({
  template: JST['static/home'],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});