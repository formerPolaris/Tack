window.PinterestClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $content = $("#content")
    this.router = new PinterestClone.Routers.Router($content);
		var that = this;
    // $('.internal-link').click(function (event) {
    //   event.preventDefault();
    //   that.router.navigate(event.target.hash, {trigger: true});
    // });

    this.handleAuth();
    Backbone.history.start();
  },

  handleAuth: function() {
    console.log("Firing handleauth");
		var that = this;
    $.ajax({
      url:"/session/check",
      type:"GET",
      success: function () {
        that.router.loggedIn();
      },
      error: function (data) {
        that.router.loggedOut();
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