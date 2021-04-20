const express = require("express");
const DroneModel = require("../models/Drone.model");
const router = express.Router();

// Iteration #2: List the drones
// ... your code here
router.get("/drones", async (req, res, next) => {
  try {
    const allDrones = await DroneModel.find();
    res.render("drones/list", { allDrones });
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.get("/drones/create", async (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await DroneModel.create({ name, propellers, maxSpeed });
    res.redirect("/drones");
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const droneId = req.params.id;
    const drone = await DroneModel.findById(droneId);
    res.render("drones/update-form", { drone });
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  try {
  const droneId = req.params.id;
  const { name, propellers, maxSpeed } = req.body;
  await DroneModel.findByIdAndUpdate(droneId, { name, propellers, maxSpeed });
  res.redirect("/drones");
} catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  try {
  const droneId = req.params.id;
  await DroneModel.findByIdAndDelete(droneId);
  res.redirect("/drones");
} catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

module.exports = router;
