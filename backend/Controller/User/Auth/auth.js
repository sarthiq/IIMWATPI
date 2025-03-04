const User = require("../../../Models/User/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {sequelize}=require('../../../importantInfo')

exports.userSignUp = async (req, res, next) => {
  let transaction; // Start the transaction

  try {
    const { name, email, phone, password } = req.body;

    
    
  } catch (err) {
    // If any error occurs, rollback the transaction
    console.log(err);
    if (transaction) {
      await transaction.rollback();
    }
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};

exports.userLogin = async (req, res, next) => {
  const { phone, password, fcmToken } = req.body;

  let t; // Transaction variable

  try {
    // Step 1: Start a transaction

    // Step 2: Find the user by phone number
    const user = await User.findOne({ where: { phone } });

    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    // Step 3: Compare the provided password with the stored password hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Log unsuccessful login attempt due to incorrect password in UserActivity
      await createUserActivity(
        req,
        user,
        "auth",
        "Login failed: Incorrect password !"
      );
      return res.status(401).json({ error: "Invalid Password" });
    }

    // Step 4: Generate a JWT token
    const expiresIn = process.env.NODE_ENV === "testing" ? "30d" : "7d";
    const token = jwt.sign(
      { name: user.name, id: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn }
    );

    t = await sequelize.transaction();

    const hashedToken = hashToken(token);
    const authToken = await AuthToken.findOne({
      where: { type: "authToken", UserId: user.id },
    });

    if (!authToken) {
      // Step 5: Save the token to the AuthToken table
      await AuthToken.create(
        {
          token: hashedToken,
          type: "authToken",
          UserId: user.id,
        },
        { transaction: t }
      ); // Use the transaction here
    } else {
      authToken.update({ token: hashedToken }, { transaction: t });
    }

    if (fcmToken) {
      const fcmAuthToken = await AuthToken.findOne({
        where: { type: "fcmToken", UserId: user.id },
      });

      if (!fcmAuthToken) {
        await AuthToken.create(
          {
            token: fcmToken,
            type: "fcmToken",
            UserId: user.id,
          },
          { transaction: t }
        ); // Use the transaction here
      } else {
        fcmAuthToken.update({ token: fcmToken }, { transaction: t });
      }
    }

    // Step 6: Log successful login attempt in UserActivity
    await createUserActivity(req, user, "auth", "Login Successful!", t); // Pass the transaction

    // Step 7: Commit the transaction
    await t.commit();

    // Step 8: Return the response
    return res.status(200).json({
      message: "Login Successful",
      token,
      userId: user.id,
    });
  } catch (err) {
    // Rollback the transaction if it exists
    if (t) await t.rollback();

    console.error("Error during login:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again later." });
  }
};
