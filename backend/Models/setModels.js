const UserQuiz = require("./AndModels/UserQuiz");
const UserQuizQuestion = require("./AndModels/UserQuizQuestion");
const Answer = require("./TestPattern/answer");
const Question = require("./TestPattern/question");
const Quiz = require("./TestPattern/quiz");

const AdminActivity = require("./User/adminActivity");
const Admin = require("./User/admins");
const UnverifiedUser = require("./User/unverifiedUser");

exports.setupModels = () => {
  Admin.hasMany(AdminActivity);
  AdminActivity.belongsTo(Admin);

  Quiz.hasMany(Question);
  Question.belongsTo(Quiz);

  Question.hasMany(Answer);
  Answer.belongsTo(Question);

  
  UnverifiedUser.belongsToMany(Quiz,{through:UserQuiz})
  Quiz.belongsToMany(UnverifiedUser,{through:UserQuiz})

  UserQuiz.belongsToMany(Question,{through:UserQuizQuestion})
  Question.belongsToMany(UserQuiz,{through:UserQuizQuestion})
};
