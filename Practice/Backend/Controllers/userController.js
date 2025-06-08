const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = 'Jwt token '

exports.signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await userModel.findOne({ email })
    console.log(existingUser);
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email already exists please log in' })
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    const userData = new userModel({ name, email, password: hashPassword })
    const saveData = await userData.save()

    return res.status(201).json({ success: true, message: 'User created successful' })

  } catch (error) {
    return res.status(404).json({ success: false, message: `User signup failed please try again, ${error}` })
  }
}

exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email })
    console.log(findUser);
    if (!findUser) {
      return res.status(409).json({ success: false, message: 'Email not found please sign up first' })
    }

    const dbPassword = findUser.password;
    console.log(dbPassword);
    const isMatch = bcrypt.compareSync(password, dbPassword)

    if (!isMatch) {
      return res.status(404).json({ success: false, message: 'Email or password is invalid' })
    }

    const token = jwt.sign({ email: findUser.email }, secretKey)

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    return res.status(404).json({ success: false, message: `User login failed please try again, ${error}` })
  }
}

exports.update = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    const updateUserData = await userModel.findByIdAndUpdate(user._id, req.body, { new: true })
    return res.status(201).json({ success: false, message: 'Profile updated successfully' })

  } catch (error) {
    return res.status(404).json({ success: false, message: `User updation failed please try again, ${error}` })
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id);

    // const { email } = await userModel.findOne({ email })
    const deletedata = await userModel.findByIdAndDelete(id)

  } catch (error) {
    return res.status(404).json({ success: false, message: `User updation failed please try again, ${error}` })
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const data = await userModel.find()
    res.status(200).json({ success: true, message: "User Found", data: data })
  } catch (error) {
    return res.status(404).json({ success: false, message: `User data not found please try again, ${error}` })
  }
}