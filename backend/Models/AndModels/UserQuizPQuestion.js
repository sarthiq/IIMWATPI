const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const UserQuizPQuestion = sequelize.define(
  "UserQuizPQuestion",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userAnswer: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "userQuizPQuestions",
  }
);

module.exports = UserQuizPQuestion;
