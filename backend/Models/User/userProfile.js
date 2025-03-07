const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const UserProfile = sequelize.define(
  "UserProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    institutionName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Name of school or college"
    },
    institutionType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // For School Students
    standard: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Current class/standard if in school"
    },
    // For College Students
    course: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Course name if in college (e.g., B.Tech, BBA)"
    },
    year: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Current year of study"
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Branch/Specialization if applicable"
    }
  },
  {
    timestamps: true,
    tableName: "userProfiles",
  }
);


module.exports = UserProfile;
