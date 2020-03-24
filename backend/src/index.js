const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
 *  Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informação do back-end
 * POST: Criar informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deletar informação no back-end
 */

/**
 * Tipos de parametro:
 * 
 * Query params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * > é possivel acessar através do request.query
 * 
 * Route params: Parametros utilizados para identificar recursos
 * > é possivel acessar através do request.params
 * 
 * Request Body: Corpo da requisição, utilizado pra criar ou alterar recursos
 *  */ 

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSql: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

app.listen(3333);