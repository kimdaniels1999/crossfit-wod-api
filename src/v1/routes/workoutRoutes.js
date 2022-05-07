const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

// router.get("/", (req, res) => {
//     res.send("Get all workouts");
// });

router.get("/:workoutId", workoutController.getOneWorkout);

// router.get("/:workoutId", (req, res) => {
//     res.send("Get an existing workout");
// });

router.post("/", workoutController.createNewWorkout);

// router.post("/", (req, res) => {
//     res.send("Create a new workout");
// });

router.patch("/:workoutId", workoutController.updateOneWorkout);

// router.patch("/:workoutId", (req, res) => {
//     res.send("Update an existing workout");
// });

router.delete("/:workoutId", workoutController.deleteOneWorkout);

// router.delete("/:workoutId", (req, res) => {
//     res.send("Delete an existing workout");
// });

module.exports = router;
