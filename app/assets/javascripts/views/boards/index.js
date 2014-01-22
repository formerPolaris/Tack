PinterestClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  className: 'panel-box',

  render: function () {
    PinterestClone.resetActives();
    $('#boards-link').addClass("active");

    var that = this;
    var renderedContent = this.template({
      boards: this.collection
    });

    this.$el.html(renderedContent);

    this.$el.imagesLoaded(function () {
      that.$el.isotope({
        // options
        columnWidth: 200,
        itemSelector: '.panel',
        layoutMode: 'perfectMasonry',
      });
    });
    return this;
  }
});