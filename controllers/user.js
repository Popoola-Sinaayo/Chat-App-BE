const User = require("../models/users.model");
const socketIO = require("../index");

const signUp = (req, res, next) => {
  const { username } = req.body;
  User.findOne({ name: username }).then((user) => {
    if (!user) {
      User.create({ name: username }).then((data) => {
        return res.json({ message: "success", username: username });
      });
    } else {
      return res.json({ message: "error user exists" });
    }
  });
};
const signIn = (req, res, next) => {
  const { username } = req.body;
  User.find({ name: username }).then((user) => {
    if (user) {
      return res.json({ message: "success", username: username });
    } else {
      return res.json({ message: "error" });
    }
  });
};

const allUsers = (req, res, next) => {
  User.find({}).then((user) => {
    return res.json({ message: "success", users: user });
  });
};

module.exports = { signUp, signIn, allUsers };
