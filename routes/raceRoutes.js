const { authJwt } = require("../middlewares");
const races = require('../controllers/raceControllers');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/races/create", races.create);

  app.get("/api/races/findall", races.findAll);

  app.post("/api/races/race/:id", races.findOne);

  app.put("/api/races/:id", races.update);

  app.delete("/api/races/race/:id", races.create);

  app.delete('/api/races/deleteall', races.deleteAll);
}
