const express = require('express');

const UserController = require('./controllers/UserController');

// Inicializando as rotas
const routes = express.Router();

// Criando a rota /users utilizando o método post para cadastrar o usuário na aplicaão/ banco de dados.
routes.post('/users', UserController.store);

module.exports = routes;