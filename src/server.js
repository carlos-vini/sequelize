const express = require("express");

const port = 5556;

const routes = require('./routes');

require("./database/index")

const app = express();

app.use(routes);

app.use(express.json());

app.listen(port, () => console.log (`O Servidor está rodando na porta ${port}!😍`));