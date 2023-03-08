const express = require("express");
const truckRouter = express.Router();
const truckData = require("../models/seed");
const Truck = require("../models/truck.js");
require("dotenv").config();

// INDUCES
// INDEX
truckRouter.get("/", (req, res) => {
    Truck.find({}, (error, allTruck) => {
      res.render("index.ejs", {
        Truck: allTruck,
      });
    });
  });

// NEW
truckRouter.get("/new", (req, res) => {
    res.render("new.ejs");
  });

// DELETE
truckRouter.delete("/:id", (req, res) => {
    Truck.findByIdAndRemove(req.params.id, (err, deletedTruck) => {
      res.redirect("/truck");
    });
  });