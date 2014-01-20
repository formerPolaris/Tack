PinterestClone.Models.Pin = Backbone.Model.extend({
  urlRoot: "/boards/:board_id/pins/",

  initialize: function (id) {
    this.id = id;
  }
});