const db = require("../db/connection");

exports.fetchScore = () => {
  return db.query(`SELECT*FROM leaderboard`).then(({ rows }) => {
    return rows;
  });
};

exports.sendScore = (data) => {
  const { rone, gone, bone, rtwo, gtwo, btwo, player, score } = data;
  return db
    .query(
      `INSERT INTO leaderboard (rone, gone, bone, rtwo, gtwo, btwo, player, score) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING*;`,
      [rone, gone, bone, rtwo, gtwo, btwo, player, score]
    )
    .then(({ rows }) => {
      return rows[0];
    });
};

exports.fetchTop = () => {
  return db
    .query(`SELECT*FROM leaderboard ORDER BY score DESC LIMIT 50;`)
    .then(({ rows }) => {
      return rows;
    });
};
