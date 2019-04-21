const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const adapter = new FileSync('./model/db/db.json');
const db = low(adapter);
module.exports.insert = {};
module.exports.update = {};
module.exports.delete = {};

// db schema
db.defaults({
	task: [], 
	usuario: []
}).write();


module.exports.insert.usuario = function(nome, email, senha){
	db.get('usuario').push({
		id: shortid.generate(),
		nome: nome,
		email: email,
		senha: senha
	}).write();
};

module.exports.insert.task = function(conteudo, date){
	db.get('task').push({
		id: shortid.generate(),
		conteudo: conteudo,
		date: date
	}).write();
};