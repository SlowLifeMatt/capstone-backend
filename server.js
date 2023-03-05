const express = require("express")
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))  

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`You're listening to the smooth sounds of a Food Truck on port ${PORT}`)
  })