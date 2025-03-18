const Interest = require("../../../Models/TestPattern/interest");

exports.getInterest = async (req, res) => {
  try {
    const interest = await Interest.findAll({ where: { UserId: req.user.id } });
    res.status(200).json(interest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.addInterest = async (req, res) => {
  try {
    const { type, result } = req.body;
    if (!type || !result)
      return res.status(400).json({ message: "Type and result are required" });
    const interest = await Interest.create({
      type,
      result,
      UserId: req.user.id,
    });
    res.status(200).json(interest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
