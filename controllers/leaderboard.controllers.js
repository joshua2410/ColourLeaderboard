const {
  fetchScore,
  sendScore,
  fetchTop,
} = require("../models/leaderboard.models");

exports.getScore = (req, res, next) => {
  fetchScore()
    .then((score) => {
      res.status(200).send({ score });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postScore = (req, res, next) => {
  const { body } = req;
  sendScore(body)
    .then((score) => {
      res.status(201).send({ score });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getTop = (req, res, next) => {
  fetchTop()
    .then((list) => {
      res.status(200).send({ list });
    })
    .catch((err) => {
      next(err);
    });
};
