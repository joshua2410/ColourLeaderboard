const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const {
  getScore,
  postScore,
} = require("./controllers/leaderboard.controllers");

app.route("/api/leaderboard").get(getScore).post(postScore);

module.exports = app;
