PinterestClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "users/index": "usersIndex",
    "boards/index": "boardsIndex",
    "sessions/create": "sendCreds",
    "": "home"
  },

  loggedIn: function () { 
  // Populates logged-in-only buttons and removes login bar
    // if(!this.loggedInView) {
      this.loggedOutView && this.loggedOutView.remove();
      this.loggedInView = new PinterestClone.Views.LoggedInView();
      $(".visibleWhenLoggedIn").append(this.loggedInView.render().$el);
    // }
  },

  loggedOut: function () {
  // Depopulates logged-in-only buttons and restores login bar
    // if(!this.loggedOutView) {
      this.loggedInView && this.loggedInView.remove();
      this.loggedOutView = new PinterestClone.Views.LoggedOutView();
      $(".visibleWhenLoggedOut").append(this.loggedOutView.render().$el);
    // }
  },

  home: function () {
    var that = this;
    var homeView = new PinterestClone.Views.HomeView();
    that._swapView(homeView, $("#content"));
  },

  usersIndex: function () {
    var that = this;
    var users = new PinterestClone.Collections.Users();

    users.fetch({
      success: function () {
        var usersIndexView = new PinterestClone.Views.UsersIndex({
          collection: users
        });

        that._swapView(usersIndexView, $("#content"));
      },

      error: function (data) {
        console.log("Hi");
        console.log(data);
        that.previous();
      }
    });
  },

  boardsIndex: function () {
    console.log("I'm in the boards!")
    var that = this;
    var boards = new PinterestClone.Collections.Boards();
    // var users = new PinterestClone.Collections.Users();
    boards.fetch({
      success: function () {
        // users.fetch();
        var boardsIndexView = new PinterestClone.Views.BoardsIndex({
          collection: boards,
          // users: users
        });

        that._swapView(boardsIndexView, $("#content"));
      },

      error: function (data) {
        console.log("Hi");
        console.log(data);

        that.previous();
      }
    })
  },

  _swapView: function (view, $selectedElement) {
    console.log("Swapping a view!");
    console.log(this._currentView)
    this._currentView && this._currentView.remove();
    this._currentView = view;
    console.log(this._currentView)
    $selectedElement.html(view.render().$el);
    console.log(this._currentView)
  }
});