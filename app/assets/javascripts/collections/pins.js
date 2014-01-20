PinterestClone.Collections.Pins = Backbone.Collection.extend({
  url: "/boards/:board_id/pins/",
  model: PinterestClone.Models.Pin
});