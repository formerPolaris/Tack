PinterestClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  className: 'panel-box',

  render: function () {
    var that = this;
    var renderedContent = this.template({
      boards: this.collection,
      users: this.users
    });

    this.$el.html(renderedContent);

    this.$el.imagesLoaded(function () {
      that.$el.isotope({
        // options
        itemSelector: '.panel',
        layoutMode: 'masonry'
      });
    });
    return this;
  }
});