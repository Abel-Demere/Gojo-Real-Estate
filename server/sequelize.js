const { Sequelize } = require("sequelize");
const pg = require("pg"); // Import pg explicitly

// Set the pg library to be used by Sequelize
pg.defaults.parseInt8 = true;

const sequelize = new Sequelize("rent", "postgres", "1230123", {
  host: "localhost",
  dialect: "postgres",
  dialectModule: pg, // Specify the imported pg module
  define: {
    timestamps: false, // Disable timestamps for simplicity
  },
});

module.exports = sequelize;
