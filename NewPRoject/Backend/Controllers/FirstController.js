const firstModel = require('../Models/firstModel')
const googleTTS = require('google-tts-api');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const data = new firstModel({ name })
    const save = await data.save()
    return res.status(201).json({ data: save })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed", error: error.message })
  }
}

exports.getAll = async (req, res) => {
  try {
    const data = await firstModel.find()
    return res.status(201).json({ data })
  } catch (error) {
    return res.status(400).json({ message: "Failed" })
  }
}

exports.audio = async (req, res) => {
  try {
    const { text } = req.body;
    const url = googleTTS.getAudioUrl(text, {
      lang: "hi",
      slow: false,
      host: "https://translate.google.com",
    });
    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json(error);
  }
};

