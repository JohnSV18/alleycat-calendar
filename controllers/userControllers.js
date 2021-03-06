const config = require("../config/auth.config.js");
const db = require("../config/db.config.js");
const User = db.users;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then(data => {
          if (!data)
              res.status(404).send({ message:" Not found race with id "})
          else res.send(data);
      })
      .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving race"})
      });
};

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
        res.send({ message: "User was registered successfully!" });
    }
  });
};
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    });
};