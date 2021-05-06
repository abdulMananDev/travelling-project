// This is the node server -->

// -> This is the boiler plate for an expres server
// const app = require("express")();

// setting port
// app.set("port", process.env.port || 3000);

// creating boiler plate by asking app to use the middleware

// Not-found
// app.use((req, res) => {
//   res.type("text/plain");
//   res.status(404);
//   res.send("404 - Not Found");
// });
// Internal Error

// app.use((req, res) => {
//   res.type("text/plain");
//   res.status(500);
//   res.send("500 - Internal Error");
// });

//   listening
// app.listen(app.get("port"), console.log(`Serving on ${app.get("port")}`));

// till here <-

// Using our App
const express = require("express");
const app = express();

// Setting up view engine to setup views for our user(SSR)
const handlebars = require("express3-handlebars").create({
  defaultLayout: "main"
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
// no '-' after view

// delivering static files in the public folder.

// console.log(__dirname + "/public/logo.png");

app.set("port", process.env.port || 3000);

app.use(express.static(__dirname + "/public"));
// setting routes in Express

// Home-Page of our app
app.get("/", function (req, res) {
  // rendering the view-home with the layout specified
  res.render("home");
});

// About section of our page
app.get("/about", function (req, res) {
  // rendering the view-about with the layout specified
  res.render("about");
});

// Custom 404 & 500- consuming middlewares
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.use((req, res) => {
  res.status(500);
  res.render("500");
});

// Listen
app.listen(app.get("port"), console.log(`Serving on ${app.get("port")}`));

// Chapter -4 page 51
