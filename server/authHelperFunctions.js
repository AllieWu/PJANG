const jwt = require("jsonwebtoken"),
  User = require("./models/userModel.js"),
  jwt_secret = process.env.secret || require("./config/config.js").secret;

//function to create tokens
function signToken(user) {
  //assigned user to a model, so convert it back to a JSON object
  const userData = user.toObject();

  //don't want to include password information in JWT being sent to client
  delete userData.password;

  //run jwt.sign on userData, so only the email and name are beign signed
  //return format: header.payload.signature
  return jwt.sign(userData, jwt_secret);
}

// function to verify tokens
function verifyToken(req, res, next) {
  const token = req.get("token") || req.body.token || req.query.token;

  // reject user if no token
  if (!token) return res.json({ success: false, message: "No token provided" });

  // try to verify token
  jwt.verify(token, jwt_secret, (err, decodedData) => {
    // error check
    if (err) return res.json({ success: false, message: "Error with token" });

    // find user associated with token
    User.findById(decodedData._id, (err, user) => {
      // reject token if no user
      if (!user)
        return res.json({ success: false, message: "Error with token" });

      req.user = user;
      next();
    });
  });
}

module.exports = {
  signToken,
  verifyToken,
};
