/*
GET /api/ideas to get an array of all ideas.
POST /api/ideas to create a new idea and save it to the database.
GET /api/ideas/:ideaId to get a single idea by id.
PUT /api/ideas/:ideaId to update a single idea by id.
DELETE /api/ideas/:ideaId to delete a single idea by id.
*/

const express = require("express");
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db.js");

ideasRouter.get("/", (req, res) => {
  res.send(getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res) => {
  res.send(addToDatabase("ideas", req.body));
});

ideasRouter.get("/:ideaId", (req, res) => {
  res.send(getFromDatabaseById("ideas", req.params.ideaId));
});

ideasRouter.put("/:ideaId", (req, res) => {
  res.send(updateInstanceInDatabase("ideas", req.body));
});

ideasRouter.delete("/:ideaId", (req, res) => {
  res.send(deleteFromDatabasebyId("ideas", req.params.ideaId));
});

module.exports = ideasRouter;
