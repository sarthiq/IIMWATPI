const { DataTypes } = require("sequelize");
const sequelize = require("../../database"); // Adjust the path to your database configuration

const Question = sequelize.define(
  "Question",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    text: {
      type: DataTypes.TEXT,
      allowNull: true, // Ensure a question always has text
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Image is optional
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false, // Type must be defined
      defaultValue: "text", // Default to text-based questions
    }, // If image-based questions are used
    isActive:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    weight: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 1.0 },
    correctAnswerId: { type: DataTypes.INTEGER, allowNull: false,defaultValue:0 }, // Stores the correct answer ID
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "questions", // Optional: specify table name if different from model name
  }
);

module.exports = Question;
