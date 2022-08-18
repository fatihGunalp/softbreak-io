module.exports = {
  HOST: "mysql.softbreak.io",
  USER: "softbreak",
  PASSWORD: "g91!YfZK1w6&",
  DB: "sb_discord",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
