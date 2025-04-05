const Interest = require("../../../Models/TestPattern/interest");

exports.getInterest = async (req, res) => {
  try {
    const interests = await Interest.findAll({ where: { UserId: req.user.id } });
    const mappedInterests = { 10: null, 12: null, 16: null };

    interests.forEach(interest => {
      if (interest.type in mappedInterests) {
        mappedInterests[interest.type] = interest.result;
      }
    });

    res.status(200).json({data:mappedInterests});
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

    const existingInterest = await Interest.findOne({
      where: { type, UserId: req.user.id },
    });
    // console.log(req.body);
    // console.log("--------------------------------");
    // console.log(existingInterest);
    let interest;
    if (existingInterest) {
      interest = await existingInterest.update({ result });
    } else {
      interest = await Interest.create({
        type,
        result,
        UserId: req.user.id,
      });
    }
    res.status(200).json(interest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
