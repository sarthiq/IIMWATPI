const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const Answer = sequelize.define(
  "Answer",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    text: {
      type: DataTypes.TEXT,
      allowNull: true, // Answer text is optional if an image is provided
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Image-based answers are optional
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false, // Type must be defined
      defaultValue: "text", // Default to text-based answers
    },
   
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "answers", // Optional: specify table name if different from model name
  }
);

module.exports = Answer;
