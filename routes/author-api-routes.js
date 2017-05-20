// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // GET route for getting all of the authors
    app.get("/api/authors", function(req, res) {
        //?
        db.Author.findAll({
            include: [db.Post]
        }).then(function(results) {
            res.json(results)
        });
    });

    // Get rotue for retrieving a single author
    app.get("/api/authors/:id", function(req, res) {
        //?
        db.Author.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(result) {
            res.json(result)
        });
    });

    // POST route for saving a new author
    app.post("/api/authors", function(req, res) {
        //?
        db.Author.create({
            name: req.body.name


        }).then(function(result) {
            res.json(result)
        });
    });

    // DELETE route for deleting authors
    app.delete("/api/authors/:id", function(req, res) {
        //?

        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.json(result)
        });
    });
};
