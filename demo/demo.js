var app = app || {};

$(function() {
  app.Router = Backbone.Router.extend({
    routes: {
      "cats": "catsRoute",
      "cat/:id": "catRoute",
      "*defaultRoute": "defaultRoute"
    },
    catsRoute: function() {
      app.view.render("cats route");
    },
    catRoute: function(id) {
      app.view.render("cat: " + id);
    },
    defaultRoute: function( a ) {
      alert(a);
    },
  });

  app.View = Backbone.View.extend({
    render: function(val) {
      this.$el.html(val);
    }
  })
  app.view = new app.View({
    el: "#container"
  })

  app.router = new app.Router();
  Backbone.history.start();
});


// Simple route
// Route with param
// route with splat
// collection.find
// navigate

// var app = app || {};

// $(function() {
//   app.Router = Backbone.Router.extend({
//     routes: {
//       "cats": "catsRoute",
//       // "todo/:id": "todoRoute",
//       // "*actions": "defaultRoute"
//     },
//     catsRoute: function() {
//       alert("cats route");
//       // app.view.render("cats!");
//     }
//     // defaultRoute: function( a ) {
//     //   alert(a);
//     // },
//     // todoRoute: function( a ) {
//     //   alert(a);
//     // }
//   });

//   // app.View = Backbone.View.extend({
//   //   render: function(val) {
//   //     this.$el.html(val);
//   //   }
//   // })
//   // app.view = new app.View({
//   //   el: "#container"
//   // })
//   app.router = new app.Router();
//   Backbone.history.start();
// });
