const mongoose = require('mongoose');
mongoose.Promise= global.Promise;
const db = {}
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/alleycats_db";
db.races = require('../models/raceModel')(mongoose);
module.exports = db;
