// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {

    app.get("/", function(req, res) {

        let data = {
            burger: "burger"
        }

        res.render("index", { burgers: data });
    });

};