var express = require('express');
var router = express.Router();
const entriesController = require('../controllers/entriesController')


/* GET home page. */
router.get('/', (req, res) => {
	res.redirect('/api');
});


router.get('/api', entriesController.index)

module.exports = router;