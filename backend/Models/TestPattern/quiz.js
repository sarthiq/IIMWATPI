const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const Quiz = sequelize.define("Quiz", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Image is optional
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "quizzes", // Optional: specify table name if different from model name
  }
);

module.exports = Quiz;
