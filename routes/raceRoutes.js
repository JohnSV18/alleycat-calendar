module.exports = app => {
    const races = require('../controllers/raceControllers');
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/create", races.create);
    // Retrieve all Tutorials
    router.get("/findall", races.findAll);
    // Retrieve a single Tutorial with id
    router.get("/race/:id", races.findOne);
    // Update a Tutorial with id
    router.put("/:id", races.update);
    // Delete a Tutorial with id
    router.delete("/race/:id", races.delete);
    // Create a new Tutorial
    router.delete("/deleteall", races.deleteAll);
    app.use('/api/races', router);
  };