const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const {
  getScore,
  postScore,
  getTop,
} = require("./controllers/leaderboard.controllers");

app.route("/api/leaderboard").get(getScore).post(postScore);
app.route("/api/top").get(getTop);

module.exports = app;
