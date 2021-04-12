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
  res.json(getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res) => {
  const newMinion = addToDatabase("minions", req.body);
  res.status(201).json(newMinion);
});

minionsRouter.get("/:minionId", (req, res) => {
  const result = getFromDatabaseById("minions", req.params.minionId);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

minionsRouter.put("/:minionId", (req, res) => {
  const result = getFromDatabaseById("minions", req.params.minionId);
  if (result) {
    res.json(updateInstanceInDatabase("minions", req.body));
  } else {
    res.sendStatus(404);
  }
});

minionsRouter.delete("/:minionId", (req, res) => {
  const result = getFromDatabaseById("minions", req.params.minionId);
  if (result) {
    deleteFromDatabasebyId("minions", req.params.minionId);
    res.status(204);
  } else {
    res.sendStatus(404);
  }
  res.send();
});

module.exports = minionsRouter;
