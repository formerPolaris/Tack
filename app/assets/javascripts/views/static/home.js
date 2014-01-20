PinterestClone.Views.HomeView = Backbone.View.extend({
  template: JST["static/home"],

  render: function () {
    this.$el.append(this.template);
    return this;
  }
});