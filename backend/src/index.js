const express = require('express'); //Importa o Modulo Express
const cors = require('cors')
const routes = require('./routes');

const app = express(); //Aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

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

app.listen(3333); //Acessa a Aplicação