const Sequelize = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const UnverifiedUser = sequelize.define(
  "UnverifiedUser",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "unverifiedUsers", // Optional: specify table name if different from model name
  }
);

module.exports = UnverifiedUser;
