window.PinterestClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new PinterestClone.Routers.Router();
    $('.internal-link').click(function (event) {
      event.preventDefault();
      router.navigate(event.currentTarget.hash, {trigger: true});
    });
    var $content = $("#content");
    var $navbar = $(".navbar#global");
    this.handleAuth(router);
    Backbone.history.start();
  },

  handleAuth: function(router) {
    console.log("Firing handleauth")
    $.ajax({
      url:"/session/check",
      type:"GET",
      success: function () {
        router.loggedIn();
      },
      error: function (data) {
        router.loggedOut();
      }
    });
  }
};

$(document).ready(function(){
  PinterestClone.initialize();
  $('#content').css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
  $(window).resize(function(){
      $('#content').css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
  });
});