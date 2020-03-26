const crypto = require('crypto');
const connection = require('../database');

module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json({ id });
    },
};

/**
 * Métodos HTTP
 * 
 * GET: Acessar uma informação
 * POST: Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Nomeados enviados na rota, após '?' (Uso em filtros, paginação, ...)
 * Route Params: Utilizado na identificação de recursos (ex.: app.get('/users/:id') )
 * Request Body: Corpo da requsição, sendo utilizado para criar ou alterar algum usuário
 * 
 * USO
 * const query_params = req.query;
 * const route_params = req.params;
 * const body_params = req.body;
 */