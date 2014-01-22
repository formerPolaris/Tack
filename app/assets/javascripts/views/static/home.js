PinterestClone.Views.HomeView = Backbone.View.extend({
  template: JST['static/home'],

  render: function () {
    PinterestClone.resetActives();
    this.$el.html(this.template());
    return this;
  }
});