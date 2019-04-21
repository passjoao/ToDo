var express = require('express');
var router = express.Router();
var usuario = require('../model/Usuario');

/*
*	todo user routers
*	@query param
*/
router.get('/register', function(req, res, next) {
	var usuario = {
		nome: req.param.nome,
		email: req.param.email, 
		senha: req.param.senha
	}

	usuario.register(usuario, function(){
		console.log('registrado')
	});
});

router.get('/autenticar', function(req, res, next) {
	res.end();
});


/*
*	todo task routers
*	@query param
*/
router.get('/create', function(req, res, next) {
	res.end();
});

router.get('/update', function(req, res, next) {
	res.end();
});

router.get('/remove', function(req, res, next) {
	res.end();
});

router.get('/list', function(req, res, next) {
	res.end();
});

module.exports = router;