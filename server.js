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
app.use(express.urlencoded({ extended: true })); 

// Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))  

app.use(methodOverride("_method"))
app.use("/truck", truckController)

app.get("/", (req, res) => {
  res.send("Hello World!")
})


app.get("truck", async (req,res) => {

})

app.listen(PORT, () => {
    console.log(`You're listening to the smooth sounds of a Food Truck on port ${PORT}`)
  })