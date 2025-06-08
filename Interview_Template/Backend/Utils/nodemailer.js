require('dotenv').config()
const nodemailer = require('nodemailer')


const transportCreater = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};



const sendEmail = async (email, name) => {
  try {

    const transporter = transportCreater()

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Your Signup confirmation',
      html: `
      <div style="max-width: 600px">
      <h2>Hello ${name}</h2>
      <p>You have login in successfully</p>
      </div>`
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent: ', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email: ', error);
    return false;
  }
}


module.exports = { sendEmail }