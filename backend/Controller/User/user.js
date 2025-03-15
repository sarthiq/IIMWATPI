exports.verifyUser = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "User verified",
  });
};
