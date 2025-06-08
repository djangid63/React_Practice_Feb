const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = "This is the key for jwt token"
const {sendEmail} = require('../Utils/nodemailer')

exports.signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const emailExists = await userModel.findOne({ email })
    if (emailExists) {
      return res.status(409).json({ success: true, message: "Email already exists Please login" })
    }
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt)

    const userData = new userModel({ name, email, password: hashed })
    const saveData = await userData.save()

    sendEmail(email, name)

    return res.status(201).json({ success: true, message: "User sign up successfully" })
  } catch (error) {
    return res.status(404).json({ success: false, message: "User sign up failed please try again" })
  }

}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const findUser = await userModel.findOne({ email })
    if (!findUser) {
      return res.status(404).json({ success: false, message: "Useer not found" })
    }

    const dbPassword = findUser.password;

    const isMatch = bcrypt.compareSync(password, dbPassword)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Password is incorrect" });
    }

    const token = jwt.sign({ email }, key, { expiresIn: '1h' })
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.log("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message || "An unexpected error occurred"
    });
  }
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params
  const user = await userModel.findByIdAndDelete(id)
}

exports.updateUser = async (req, res) => {

  try {
    const { name, email } = req.body
    const findUser = await userModel.findOne({ email })

    const updateUser = await userModel.findByIdAndUpdate(findUser._id, req.body, { new: true })
    console.log(updateUser);

  } catch (error) {
    console.log('error while updating', error);
  }

}

exports.getusers = async (req, res) => {
  try {
    const usersData = await userModel.find()
    return res.status(200).json({ success: true, message: " Data fetched", data: usersData })
  } catch (error) {

  }
}

