var db = require('../model/db');

class Usuario{
	register(usuario, callback){
		db.insert.usuario(usuario.nome, usuario.email, usuario.senha);
		callback();
	}

	autenticar(login, callback){
		var user = db.get.usuario(login.email);
		console.log(user)
		if(user.senha === login.senha){
			callback(true);
		}
		else{
			callback(false);
		}
	}
}

module.exports = new Usuario;