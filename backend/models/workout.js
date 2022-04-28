const mongoose = require(mongoose)
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
	date: Date,
	warmup: Number,
	cardio: {
		type: String,
		time: {
			hours: String,
			minutes: String
		}
	},
	notes: String,
	excercise: String,
	set1: {
		reps: Number,
		weight: Number
	},
	set2: {
		reps: Number,
		weight: Number
	},
	set3: {
		reps: Number,
		weight: Number
	},
	set4: {
		reps: Number,
		weight: Number
	},
	set5: {
		reps: Number,
		weight: Number
	},
	set6: {
		reps: Number,
		weight: Number
	},
},
	{ timestamps: true }
)

module.exports = mongoose.model('Workout', WorkoutSchema)