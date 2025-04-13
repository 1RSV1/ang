module.exports = app => {
    const uses = require("../controllers/tutorial.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", uses.create);
  
    // Retrieve all Tutorials
    router.get("/", uses.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", uses.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", uses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", uses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", uses.delete);
  
    // Create a new Tutorial
    router.delete("/", uses.deleteAll);
  
    app.use('/api', router);
  };