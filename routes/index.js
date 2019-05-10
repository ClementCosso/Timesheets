const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Project = require("../models/Project");
const Calendar = require("../models/Calendar");
const bcrypt = require("bcrypt");

const bcryptSalt = 10;

//==================  middlewares  ==================//

let isAuthenticated = (req, res, next) => {
  console.log("log", req.user);
  if (req.user) {
    // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } else {
    //    |
    res.redirect("/login"); //    |
  } //    |
};

let isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user.administrator) {
    // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } else {
    //    |
    res.redirect("/"); //    |
  } //    |
};

let isLeader = (req, res, next) => {
  console.log(req.user);
  if (req.user.teamleader) {
    // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } else {
    //    |
    res.redirect("/"); //    |
  } //    |
};

//==================  routes  ==================//

router.get("/admin", isAuthenticated, (req, res, next) => {
  res.render("index");
});

router.get("/rights", isAuthenticated, (req, res, next) => {
  res.render("rights");
});

router.get("/people", isAuthenticated, (req, res, next) => {
  User.find().then(users => {
    res.render("people", { users });
  });
});

router.get("/projects", isAuthenticated, (req, res, next) => {
  Project.find().then(projects => {
    res.render("projects", { projects });
  });
});

router.get("/", isAuthenticated, (req, res, next) => {
  Project.find().then(projects => {
    res.render("index");
  });
});

router.post("/calendar/new", isAuthenticated, (req, res, next) => {
  let calendar = req.body;
  calendar.user = req.user._id;
  Calendar.create(calendar).then(_ => {
    res.redirect("/");
  });
});

// router.get("/users/new", (req, res, next) => {
//   res.render("newuser");
// });

router.get("/users/delete/:id", (req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(_ => {
    res.redirect("/");
  });
});

router.get("/users/archive/:id", (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { $set: { hidden: true } }).then(_ => {
    res.redirect("/");
  });
});

// router.post("/users/new", (req, res, next) => {
//   req.body.password = bcrypt.hashSync(
//     req.body.password,
//     bcrypt.genSaltSync(bcryptSalt)
//   );
//   req.body.intern = req.body.intern == "on";
//   User.create(req.body).then(user => {
//     res.redirect("/");
//   });
// });

module.exports = router;

// module.exports.isAuthenticated = isAuthenticated;
