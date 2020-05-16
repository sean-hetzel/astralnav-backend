const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findById(req.params.id);
    updatedUser.updateOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.json(updatedUser);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.id });
    res.json(removedUser);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
