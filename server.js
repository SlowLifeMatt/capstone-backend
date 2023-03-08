const express = require("express")
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
// Middleware
app.use(cors());
app.use(morgan("dev")); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

// Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))  

// Model
const TruckSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String,
    avgprice: String,
  });

const Truck = mongoose.model("Truck", TruckSchema)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`You're listening to the smooth sounds of a Food Truck on port ${PORT}`)
  })