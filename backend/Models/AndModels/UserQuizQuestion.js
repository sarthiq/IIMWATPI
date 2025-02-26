const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const UserQuizQuestion = sequelize.define(
  "UserQuizQuestion",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "userQuizQuestions", // Optional: specify table name if different from model name
  }
);

module.exports = UserQuizQuestion;
