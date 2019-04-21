var db = require('../model/db');

class Usuario{
	register(usuario, callback){
		db.insert.usuario(usuario.nome, usuario.email, usuario.senha);
		callback();
	}
}

module.exports = Usuario;