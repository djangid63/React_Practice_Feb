// Create a REST API using Node.js .
// The API should accept two numbers start and end as query parameters.
// The API should return all prime numbers in the range [start, end] as a JSON array.
// Write a function to determine if a number is prime
// Sample Input:
// GET /primes?start=10&end=20

// Sample Output:
// {
// "primes": [11, 13, 17, 19]
// }
const cron = require('node-cron');

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 5000
const mongoURL = 'mongodb://localhost:27017/secondPactice'

mongoose.connect(mongoURL)
  .then(() => { console.log("Connected to the DB successfully") })
  .catch(() => { console.log("Failed to connect with the DB") })

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

const reverseStr = (str) => {
  let tempStr = '';
  let longestStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && str[i] !== undefined) {
      tempStr += str[i]
    } else {
      // console.log(`long = ${longestStr}, temp = ${tempStr}`);
      if (tempStr.length >= longestStr.length) {
        longestStr = tempStr;
      }
      tempStr = ''
    }
  }

  if (tempStr.length >= longestStr.length) {
    longestStr = tempStr;
  }

  return longestStr
}


app.get('/prime', (req, res) => {
  try {
    const start = parseInt(req.query.start);
    const end = parseInt(req.query.end);

    const primes = [];

    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    res.json({ primes })
  } catch (error) {
    console.log(error);
  }
})


app.get('/reverse', async (req, res) => {
  try {
    const { str } = req.query;
    let reversedStr = reverseStr(str)
    res.json({ reversedStr })
  } catch (error) {
    console.log(error);
  }
})


const firstRouter = require('./Router/firstRouter')
const secondRouter = require('./Router/secondRouter')
const firstModel = require('./Models/firstModel')
const secondModel = require('./Models/secondModel')

app.use('/firstuser', firstRouter)
app.use('/seconduser', secondRouter)


// cron.schedule(' * * * *', async () => {
//   console.log('running a task every min');
//   const firstData = await firstModel.find()
//   const secondData = await secondModel.find()

//   if (secondData.length === 0) {
//     firstData.forEach((item) => {
//       const newData = new secondModel({ name: item.name })
//       const save = newData.save()
//     })
//   } else {
//     const lastDocument = await secondModel.findOne().sort({ _id: -1 }).limit(1);
//     console.log(lastDocument);
//     console.log('----------------------------------')
//     let time = new Date();

//     firstData.filter(data => data.createdAt > lastDocument.createdAt).forEach(async (data) => {
//       const second = await secondModel.create({ name: data.name });
//       console.log("data created");
//       // await firstModel.findByIdAndDelete(data._id);
//     });
//   }
// });

app.listen(PORT, () => { console.log(`Server running on ${PORT}`) })
