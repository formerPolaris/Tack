PinterestClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/boards/",

  initialize: function (id) {
    this.id = id;
  }
});