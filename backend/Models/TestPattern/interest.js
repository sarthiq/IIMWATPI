const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Interest = sequelize.define(
  "Interest",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    result: {
      type: DataTypes.JSON,
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: "interests"
  }
);

module.exports = Interest;
