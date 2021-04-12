const express = require("express");
const checkMillionDollarIdea = require("./checkMillionDollarIdea.js");
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db.js");

ideasRouter.get("/", (req, res) => {
  res.json(getAllFromDatabase("ideas"));
});

ideasRouter.post("/", checkMillionDollarIdea, (req, res) => {
  res.status(201).json(addToDatabase("ideas", req.body));
});

ideasRouter.get("/:ideaId", (req, res) => {
  const check = getFromDatabaseById("ideas", req.params.ideaId);
  if (check) {
    res.json(check);
  } else {
    res.sendStatus(404);
  }
});

ideasRouter.put("/:ideaId", (req, res) => {
  const result = getFromDatabaseById("ideas", req.params.ideaId);
  if (result) {
    res.json(updateInstanceInDatabase("ideas", req.body));
  } else {
    res.sendStatus(404);
  }
});

ideasRouter.delete("/:ideaId", (req, res) => {
  const check = getFromDatabaseById("ideas", req.params.ideaId);
  if (check) {
    deleteFromDatabasebyId("ideas", req.params.ideaId);
    res.status(204);
  } else {
    res.status(404);
  }
  res.send();
});

module.exports = ideasRouter;
