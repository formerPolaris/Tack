PinterestClone.Views.LoggedOutView = Backbone.View.extend ({
  events: {
    "click .submitCredentials": "sendCreds"
  },

  template: JST["auth/logged_out"],
  render: function () {
    this.$el.append(this.template);
    return this;
  },

  sendCreds: function (data) {
    console.log(data);
    $.ajax({
      url: "/session",
      type: "POST",
      data: {
        "user":
          {
            "email": data.email,
            "password": data.password
          }
      },
      success: function () {
        PinterestClone.handleAuth();
      },
      error: function (err) {
        console.log(err.responseJSON)
      }
    });
  }
});