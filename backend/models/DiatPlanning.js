const mongoose = require('mongoose')

const WorkoutShedule = new mongoose.Schema({
    workoutType: String,
    date: String,
    startTime: String,
    duration: Number,


})

const WorkoutSheduleModel = mongoose.model("workoutShedule",WorkoutShedule)
module.exports  = WorkoutSheduleModel



