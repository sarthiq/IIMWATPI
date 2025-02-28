const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const UserQuiz = sequelize.define(
  "UserQuiz",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    startTime: { type: DataTypes.DATE },
    endTime: { type: DataTypes.DATE },
    iqAnswer: { type: DataTypes.JSON },
    personalityAnswer: { type: DataTypes.JSON },
    creativityAnswer: { type: DataTypes.JSON },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "userQuizs", // Optional: specify table name if different from model name
  }
);

module.exports = UserQuiz;
