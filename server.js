const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db.config.js');
// require('dotenv').config({ path: "./config/config.env" });
app.use(cors());
app.use(express.json());

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('connected to database');
    })
    .catch(err => {
        console.log("Cannot connect to the database", err);
        process.exit();
    })

//simple route 
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to Alleycat Calendar" });
// })
require('./routes/raceRoutes')(app);
require('./routes/userRoutes')(app);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
