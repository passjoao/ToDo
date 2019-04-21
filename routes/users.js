var express = require('express');
var router = express.Router();
var usuario = require('../model/Usuario.js');

/*
*	todo user routers
*	@query param
*/
router.get('/register', function(req, res, next) {
	let register = {
		nome: req.query.nome,
		email: req.query.email, 
		senha: req.query.senha
	}

	usuario.register(register, function(){
		res.end();
	});
});

router.get('/autenticar', function(req, res, next) {
	let login = {
		email: req.query.email,
		senha: req.query.senha
	}

	usuario.autenticar(login, function(status){
		res.send(status);
		res.end();
	});
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