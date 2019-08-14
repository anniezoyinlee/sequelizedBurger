const express = require("express");

const router = express.Router();
const db = require("../models/");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll()
    .then(function (dbBurger) {
      console.log(dbBurger);
      // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
      const hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create({
    burger_name: req.body.burger_name
  })
    // pass the result of our call
    .then(function (dbBurger) {
      // log the result to our terminal/bash window
      console.log(dbBurger);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/burgers/update/:id", function (req, res) {
  // update one of the burgers
  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function (dbBurger) {
    res.json("/");
  });
});

module.exports = router;
