var express = require('express');
var router = express.Router();

/*
*	todo user routers
*	@query param
*/
router.get('/register', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/autenticar', function(req, res, next) {
	res.send('respond with a resource');
});


/*
*	todo task routers
*	@query param
*/
router.get('/create', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/update', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/remove', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;