const jwt = require("jsonwebtoken");
const Admin = require("../Models/User/admins");
const User = require("../Models/User/users");



exports.adminAuthentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // Verify the JWT token and extract the payload
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Find the admin by primary key (id)
    const admin = await Admin.findByPk(payload.id);

    // Check if the admin exists
    if (!admin) {
      return res.status(404).json({ error: "Admin not found!" });
    }

    // Check freeze status for admin types 'SA' and 'A'
    if (
      (admin.adminType === "SA" || admin.adminType === "A") &&
      admin.isDeactivated
    ) {
      return res
        .status(403)
        .json({ error: "Access denied. Admin account is Deactivated!" });
    }


    // Check freeze status for admin types 'SA' and 'A'
    if (
      (admin.adminType === "SA" || admin.adminType === "A") &&
      admin.freezeStatus
    ) {
      return res
        .status(403)
        .json({ error: "Access denied. Admin account is frozen!" });
    }

    // Assign the admin object to the request object
    req.admin = admin;

    // Proceed to the next middleware
    next();
  } catch (err) {
    return res.status(503).json({ error: "Invalid Signature!" });
  }
};

exports.userAuthentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // If no token is provided
    if (!token) {
      req.userType = 'unauthorized';
      return next();
    }

    try {
      // Verify the JWT token and extract the payload
      const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Find the user
      const user = await User.findByPk(payload.id);

      // Check if the user exists
      if (!user) {
        return res.status(404).json({ 
          success: false,
          message: "User not found!" 
        });
      }

      // Check if user is blocked
      if (user.isBlocked) {
        return res.status(403).json({ 
          success: false,
          message: "Access denied. User account is blocked!" 
        });
      }

      // If everything is okay, set the user and userType in request
      req.user = user;
      req.userType = 'authorized';
      next();

    } catch (tokenError) {
      // If token verification fails
      return res.status(401).json({ 
        success: false,
        message: "Invalid or expired token!" 
      });
    }

  } catch (err) {
    console.error("Error in user authentication:", err);
    return res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
};

// New strict auth middleware where token is mandatory
exports.requireUserAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: "Authentication token is required" 
      });
    }

    // Verify token
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (tokenError) {
      if (tokenError.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          success: false,
          message: "Token has expired. Please login again" 
        });
      }
      return res.status(401).json({ 
        success: false,
        message: "Invalid authentication token" 
      });
    }

    // Find user
    const user = await User.findByPk(payload.id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: "User not found" 
      });
    }

    // Check if user is blocked
    if (user.isBlocked) {
      return res.status(403).json({ 
        success: false,
        message: "Your account has been blocked. Please contact support." 
      });
    }

    // Set user in request object
    req.user = user;
    req.userType = 'authorized';
    next();

  } catch (err) {
    console.error("Error in strict user authentication:", err);
    return res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
};