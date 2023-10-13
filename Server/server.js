const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 4000

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {})
  .then(() => console.log("Connected to the DataBase 🧬"))
  .catch((err) => console.log(err));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Server Running on ${port}`)
})