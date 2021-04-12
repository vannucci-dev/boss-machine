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

minionsRouter.param("minionId", (req, res, next, id) => {
  const minion = getFromDatabaseById("minions", id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.send(404).send();
  }
});

minionsRouter.post("/", (req, res) => {
  const newMinion = addToDatabase("minions", req.body);
  res.status(201).json(newMinion);
});

minionsRouter.get("/:minionId", (req, res) => {
  const minion = getFromDatabaseById("minions", req.params.minionId);
  res.json(minion);
});

minionsRouter.put("/:minionId", (req, res) => {
  const updatedMinion = updateInstanceInDatabase("minions", req.body);
  res.send(updatedMinion);
});

minionsRouter.delete("/:minionId", (req, res) => {
  deleteFromDatabasebyId("minions", req.params.minionId);
  res.status(204);
  res.send();
});

/*
GET /api/minions/:minionId/work to get an array of all work for the specified minon.
POST /api/minions/:minionId/work to create a new work object and save it to the database.
PUT /api/minions/:minionId/work/:workId to update a single work by id.
DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
*/

minionsRouter.get("/:minionId/work", (req, res) => {
  const check = getAllFromDatabase("work").find(
    (work) => work.minionId === req.params.minionId
  );
  if (check) {
    res.send(
      getAllFromDatabase("work").filter((work) => {
        return work.minionId === req.params.minionId;
      })
    );
  } else {
    res.sendStatus(404);
  }
});

minionsRouter.post("/:minionId/work", (req, res) => {
  const newWork = addToDatabase("work", req.body);
  res.status(201).json(newWork);
});

minionsRouter.param("workId", (req, res, next, id) => {
  const work = getFromDatabaseById("work", id);
  if (work) {
    req.work = work;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.put("/:minionId/work/:workId", (req, res) => {
  if (req.params.minionId === req.body.minionId) {
    const updatedWork = updateInstanceInDatabase("work", req.body);
    res.send(updatedWork);
  } else {
    res.status(400).send();
  }
});

minionsRouter.delete("/:minionId/work/:workId", (req, res) => {
  deleteFromDatabasebyId("work", req.params.workId);
  res.status(204);
  res.send();
});

module.exports = minionsRouter;
