const UserQuiz = require("./AndModels/UserQuiz");
const UserQuizPQuestion = require("./AndModels/UserQuizPQuestion");
const UserQuizQuestion = require("./AndModels/UserQuizQuestion");
const Answer = require("./TestPattern/answer");
const PersonalityQuestion = require("./TestPattern/personalityQuestion");
const Question = require("./TestPattern/question");
const Quiz = require("./TestPattern/quiz");

const AdminActivity = require("./User/adminActivity");
const Admin = require("./User/admins");
const UnverifiedUser = require("./User/unverifiedUser");
const User = require("./User/users");



exports.setupModels = () => {
  Admin.hasMany(AdminActivity);
  AdminActivity.belongsTo(Admin);

  Quiz.hasMany(Question);
  Question.belongsTo(Quiz);

  Quiz.hasMany(PersonalityQuestion);
  PersonalityQuestion.belongsTo(Quiz);

  Question.hasMany(Answer);
  Answer.belongsTo(Question);

  
  UnverifiedUser.belongsToMany(Quiz,{through:UserQuiz})
  Quiz.belongsToMany(UnverifiedUser,{through:UserQuiz})

  User.belongsToMany(Quiz,{through:UserQuiz})
  Quiz.belongsToMany(User,{through:UserQuiz})

  UserQuiz.belongsToMany(Question,{through:UserQuizQuestion})
  Question.belongsToMany(UserQuiz,{through:UserQuizQuestion})

  UserQuiz.belongsToMany(PersonalityQuestion,{through:UserQuizPQuestion})
  PersonalityQuestion.belongsToMany(UserQuiz,{through:UserQuizPQuestion})


  


  
};
