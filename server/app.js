const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const usersRoute = require("./routes/users");
const blogsRoute = require("./routes/blogs");
const session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080" // it's my React host
  })
);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "sdlfjljrowuroweu",
    cookie: { secure: false }
  })
);
app.use("/users", usersRoute);
app.use("/blogs", blogsRoute);
app.get("*", function(req, res) {
  res.redirect("/blogs");
});

app.post("*", function(req, res) {
  res.redirect("/blogs");
});

mongoose
  .connect(
    "mongodb://localhost/blog_database",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB Connected and server started");
    console.log("Server started on : http://localhost:5000");
    app.listen(5000);
  })
  .catch(err => console.log(err));
