const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const UserQuiz = sequelize.define(
  "UserQuiz",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "userQuizs", // Optional: specify table name if different from model name
  }
);

module.exports = UserQuiz;
