const meals = require('../models/meals');
const workout = require('../models/workout');

exports.index = async (req, res, next) => {
	return res.set({'Title': 'Fitness App'})
}