var express = require('express');
var router = express.Router();
const entriesController = require('../controllers/entriesController')


/* GET home page. */
router.get('/', (req, res) => {
	console.log('Redirecting...')
	res.redirect(302 ,'/api');
});


router.get('/api', entriesController.index)

module.exports = router;