const express = require("express");
const router = express.Router();
const uuid = require('uuid');
const users = require("../Users");

const idFilter = req => user => user.id === parseInt(req.params.id);

// Gets All users
router.get("/", (req, res) => res.json(users));

// Get Single User
router.get("/:id", (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    res.json(users.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

// Create User
router.post("/", (req, res) => {
  const newUser = {
    ...req.body,
    id: uuid.v4(),
    status: "active",
  };

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  users.push(newUser);
  res.json(users);
  // res.redirect('/');
});

// Update User
router.put("/:id", (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    users.forEach((user, i) => {
      if (idFilter(req)(user)) {
        const updUser = { ...user, ...req.body };
        users[i] = updUser;
        res.json({ msg: "User updated", updUser });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

// Delete User
router.delete("/:id", (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    res.json({
      msg: "User deleted",
      users: users.filter((user) => !idFilter(req)(user)),
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

module.exports = router;
