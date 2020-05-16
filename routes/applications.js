const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/applications/:id", async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    res.json(application);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/applications", async (req, res) => {
  const application = new Application({
    user_id: req.body.user_id,
    company: req.body.company,
    position: req.body.position,
    location: req.body.location,
    method: req.body.method,
    coverLetter: req.body.coverLetter,
    date: req.body.coverLetter,
    notes: req.body.notes,
    status: req.body.status,
  });
  try {
    const savedApplication = await application.save();
    res.json(savedApplication);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.patch("/applications/:id", async (req, res) => {
  try {
    const updatedApplication = await Application.findById(req.params.id);
    updatedApplication.updateOne({
      user_id: req.body.user_id,
      company: req.body.company,
      position: req.body.position,
      location: req.body.location,
      method: req.body.method,
      coverLetter: req.body.coverLetter,
      date: req.body.coverLetter,
      notes: req.body.notes,
      status: req.body.status,
    });
    res.json(updatedApplication);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete("/applications/:id", async (req, res) => {
  try {
    const removedApplication = await Application.remove({ _id: req.params.id });
    res.json(removedApplication);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
