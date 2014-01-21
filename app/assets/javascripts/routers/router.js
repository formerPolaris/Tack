PinterestClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "users/index": "usersIndex",
    "boards/index": "boardsIndex",
    "sessions/create": "sendCreds"
  },

  initialize: function ($rootEl) {
    this.$root = $rootEl;
  },

  loggedIn: function () {
  // Populates logged-in-only buttons and removes login bar
      this.loggedOutView && this.loggedOutView.remove();
      this.loggedInButtonsView = new PinterestClone.Views.LoggedInButtonsView();
      this.loggedInDashboardView = new PinterestClone.Views.LoggedInDashboardView();
      $("#link-list").append(this.loggedInButtonsView.render());
      $("#backbone-auth").append(this.loggedInDashboardView.render());
  },

  loggedOut: function () {
  // Depopulates logged-in-only buttons and restores login bar
      this.loggedInButtonsView && this.loggedInButtonsView.remove();
      this.loggedInDashboardView && this.loggedInDashboardView.remove();
      this.loggedOutView = new PinterestClone.Views.LoggedOutView();
      $("#backbone-auth").append(this.loggedOutView.render().$el);
  },

  home: function () {
    var that = this;
    var homeView = new PinterestClone.Views.HomeView();
    that._swapView(homeView, that.$root);
  },

  usersIndex: function () {
    var that = this;
    var users = new PinterestClone.Collections.Users();

    users.fetch({
      success: function () {
        var usersIndexView = new PinterestClone.Views.UsersIndex({
          collection: users
        });

        that._swapView(usersIndexView, that.$root);
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

        that._swapView(boardsIndexView, that.$root);
      },

      error: function (data) {
        console.log("Hi");
        console.log(data);

        that.previous();
      }
    })
  },

  _swapView: function (view, $selectedElement) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $selectedElement.html(view.render().$el);
  }
});