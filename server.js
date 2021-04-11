const express = require("express");
const app = express();

module.exports = app;

// Adding middleware for handling CORS requests
const cors = require("cors");
app.use(cors());

// Adding middware for parsing request bodies
app.use(express.json());

// Mounting apiRouter at the '/api' path
const apiRouter = require("./server/api");
app.use("/api", apiRouter);

//Test and start server
if (!module.parent) {
  const PORT = process.env.PORT || 4001;

  app.listen(PORT, () => {
    console.log("App listening on port " + Number(PORT));
  });
}
