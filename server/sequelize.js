// sequelize.js

const { Sequelize } = require("sequelize");
const pg = require('pg');

// Set up connection pooling
pg.defaults.poolSize = 10;

const sequelize = new Sequelize("rent", "postgres", "1230123", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false, // Disable timestamps for simplicity
  },
  dialectModule: pg,
});

module.exports = sequelize;
