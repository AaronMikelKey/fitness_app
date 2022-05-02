var express = require('express');
var router = express.Router();
const entries = require('../controllers/entriesController')


/* GET home page. */
router.get('/', (req, res) => {
	res.redirect('/api');
});


router.get('/api', entries.index)

module.exports = router;