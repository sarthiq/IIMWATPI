const Answer = require("./TestPattern/answer");
const Question = require("./TestPattern/question");
const Quiz = require("./TestPattern/quiz");

const AdminActivity = require("./User/adminActivity");
const Admin = require("./User/admins");



Admin.hasMany(AdminActivity);
AdminActivity.belongsTo(Admin);

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

Question.hasMany(Answer);
Answer.belongsTo(Question);