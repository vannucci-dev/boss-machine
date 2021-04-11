/* 
GET /api/minions to get an array of all minions.
POST /api/minions to create a new minion and save it to the database.
GET /api/minions/:minionId to get a single minion by id.
PUT /api/minions/:minionId to update a single minion by id.
DELETE /api/minions/:minionId to delete a single minion by id.
*/

const express = require("express");
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db.js");
const minionsRouter = express.Router();

minionsRouter.get("/", (req, res) => {
  res.send(getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res) => {
  res.send(addToDatabase("minions", req.body));
});

minionsRouter.get("/:minionId", (req, res) => {
  res.send(getFromDatabaseById("minions", req.params.minionId));
});

minionsRouter.put("/:minionId", (req, res) => {
  res.send(updateInstanceInDatabase("minions", req.body));
});

minionsRouter.delete("/:minionId", (req, res) => {
  res.send(deleteFromDatabasebyId("minions", req.params.minionId));
});

module.exports = minionsRouter;
