const Query = require("../../Models/Query/query");
exports.createQuery = async (req, res) => {
  const { name, phone, schoolOrCollege, email, reason } = req.body;
  try {
    if (!name || !phone || !schoolOrCollege || !email || !reason) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "Missing required fields - name, phone, School/College, email, reason",
        });
    }

    const query = await Query.create({
      name,
      phone,
      schoolOrCollege,
      email,
      reason,
    });
    return res.status(200).json({ success: true, query });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
