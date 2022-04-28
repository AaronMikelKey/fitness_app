const mongoose = require(mongoose)
const Schema = mongoose.Schema

const MealSchema = new Schema({
	meals: {
		breakfast: {
			meal: String,
			calories: Number
		},
		lunch: {
			meal: String,
			calories: Number
		},
		dinner: {
			meal: String,
			calories: Number
		},
		snack: {
			meal: String,
			calories: Number
		},
	}
},
	{ timestamps: true }
)

module.exports = mongoose.model('Meal', MealSchema)