const secondModel = require('../Models/secondModel')

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const data = new secondModel(name)
    const save = await data.save()
    return res.status(201).json({ data })
  } catch (error) {
    return res.status(400).json({ message: "Failed" })
  }
}

exports.getAll = async (req, res) => {
  try {
    const data = await secondModel.find()
    return res.status(201).json({ data })
  } catch (error) {
    return res.status(400).json({ message: "Failed" })
  }
}

