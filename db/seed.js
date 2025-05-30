const db = require("./connection");

const seed = async () => {
  return db.query(`DROP TABLE IF EXISTS leaderboard;`).then(() => {
    const leaderboardTablePromise = db.query(`CREATE TABLE leaderboard (
rone SMALLINT,
gone SMALLINT,
bone SMALLINT,
rtwo SMALLINT,
gtwo SMALLINT,
btwo SMALLINT,
player VARCHAR,
score SMALLINT);`);
    return Promise.all([leaderboardTablePromise]);
  });
};

module.exports = seed;
