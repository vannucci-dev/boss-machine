/*
GET /api/meetings to get an array of all meetings.
POST /api/meetings to create a new meeting and save it to the database.
DELETE /api/meetings to delete all meetings from the database.
*/

const express = require("express");
const meetingsRouter = express.Router();
const {
  getAllFromDatabase,
  createMeeting,
  deleteAllFromDatabase,
} = require("./db.js");

meetingsRouter.get("/", (req, res) => {
  res.send(getAllFromDatabase("meetings"));
});

meetingsRouter.post("/", (req, res) => {
  res.send(createMeeting());
});

meetingsRouter.delete("/", (req, res) => {
  res.send(deleteAllFromDatabase("meetings"));
});

module.exports = meetingsRouter;
