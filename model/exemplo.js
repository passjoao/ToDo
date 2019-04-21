var db = require('../model/db');
db.insert.usuario('nome', 'email@email.com', 'senha123');
db.insert.task('ir no mercado comprar pao');

// na pasta db temo index e la é que cria essas funções de 
// insert update... pra mexer no banco e criar novas funcoes
// https://github.com/typicode/lowdb