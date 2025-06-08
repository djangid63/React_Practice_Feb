const jwt = require('jsonwebtoken');
const userModel = require('Models/userModel');
const key = 'this is a jwt key'

module.exports = async (req, res, next) => {
  try {
    const tokenBarrier = req.headers.authorization;
    const token = tokenBarrier.split(" ")[1];
    const decodedToken = jwt.verify(token, key)

    const user = await userModel.findOne({ email: decodedToken.email })

    req.user = user;

    next()
  } catch (error) {
    console.log("Auth middleware error:", error.message);
    return res.status(500).json({ message: "Authentication error" });
  }
}