const async = require('async');
const meals = require('../models/meals');
const workout = require('../models/workout');

exports.index = async (req, res, next) => {
	return res.send(JSON.stringify({'Title': 'Fitness App', 'body' : 'An app to track your fitness and meals.'}))
}