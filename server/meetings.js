const express = require("express");
const meetingsRouter = express.Router();
const {
  getAllFromDatabase,
  createMeeting,
  addToDatabase,
  deleteAllFromDatabase,
} = require("./db.js");

meetingsRouter.get("/", (req, res) => {
  res.json(getAllFromDatabase("meetings"));
});

meetingsRouter.post("/", (req, res) => {
  res.status(201).json(addToDatabase("meetings", createMeeting()));
});

meetingsRouter.delete("/", (req, res) => {
  deleteAllFromDatabase("meetings");
  res.sendStatus(204);
});

module.exports = meetingsRouter;
