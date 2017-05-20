// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
 
// Dependencies
// =============================================================
var db = require("../models");
 
// Routes
// =============================================================
module.exports = function(app) {
 
  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    // @todo: to be used until activity 4
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    //
 
    db.Post.findAll({
      include: [db.Author],
      where: query
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });
     
  });
 
  // Get rotue for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });
 
  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      AuthorId: req.body.AuthorId
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
 
  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost){
      res.json(dbAuthor);
    });
  });
 
  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      {
        title: req.body.title,
        body: req.body.body
      },
      {
        where: req.body.id
      }
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};