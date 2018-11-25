const User = require("../mdoels/user");

module.exports = {
  register(req, res) {
    var data = {};
    data["username"] = req.body.username;
    data["password"] = req.body.password;
    User.create(data, function(err, doc) {
      if (err) {
        var response = {};
        response["message"] = "Could not register";
        res.status(400).json(response);
      } else {
        var response = {};
        response["message"] = "Registration Succesful";
        console.log("Registration Succesful");
        req.session.user = req.body.username;
        req.session.save();
        res.status(200).json(response);
      }
    });
  },

  login(req, res, next) {
    var data = {};
    data["username"] = req.body.username;
    data["password"] = req.body.password;
    User.findOne(data, function(err, doc) {
      var response = {};
      if (doc == null) {
        response["message"] = "Could not find user in login";
        res.status(404).json(response);
      } else {
        if (req.session.user) {
          res.status(200).json({ message: "already logged in" });
        } else {
          response["message"] = "Succesfully logged in";
          console.log("Succesfully logged in");
          req.session.user = req.body.username;
          req.session.save();
          console.log(req.session.user);
          res.status(200).json(response);
        }
      }
    });
  },
  logout(req, res) {
    if (req.session.user) {
      req.session.destroy(function() {
        console.log("user logged out.");
      });
      res.status(200).json({});
    } else res.status(200).json({ message: " already loggged out" });
  },
  isLoggedIn(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      var response = { message: "not authenticated" };
      console.log(response);
      res.status(400).json(response);
    }
  },
  isLoggedOut(req, res, next) {
    if (!req.session.user) {
      next();
    } else {
      res.status(404).json({ message: "already logged in" });
    }
  },
  allUsers(req, res) {
    User.find(function(err, doc) {
      var response = {};
      if (err) {
        response["message"] = "could not load users";
        res.send(404).json(response);
      } else {
        response["users"] = doc;
        res.json(response);
      }
    });
  }
};
