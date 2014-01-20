PinterestClone.Views.LoggedOutView = Backbone.View.extend ({
  events: {
    "click .submitCredentials": "sendCreds"
  },

  template: JST["auth/logged_out"],

  render: function () {
    this.$el.append(this.template);
    return this;
  },

  sendCreds: function (event) {
		var email = this.$('input.email-input').val();
		var password = this.$('input.password-input').val();
    $.ajax({
      url: "/session",
      type: "POST",
      data: {
        "user":
          {
            email: email,
						password: password
          }
      },
      success: function () {
				console.log("successful login");
        PinterestClone.handleAuth();
      },
      error: function (err) {
        console.log(err.responseJSON)
      }
    });
  }
});