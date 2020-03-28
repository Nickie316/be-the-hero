const express = require('express'); //Importa o Modulo Express
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express(); //Aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
    Rota / Recurso
*/

/*
    Métodos HTTP:

    GET: Buscar/listar uma informação do Back-End;
    POST: Criar uma informação do Back-End;
    PUT: Alterar uma informação no  Back-End;
    DELETE: Deletar uma informação do Back-End;
*/

/*
    Tipos de Parâmetros:

    Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos;
    Request Body: Corpo da requisição, utilizado para criar uou alterar recursos;
*/

/*
    SQL: MySQL, SQLite, `PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc;
*/

/*
    Driver: SELECT * FROM users
    QUery Build: table('users').select('*').where()
*/

module.exports = app;