const crypto = require('crypto'); //Gera caracteres aleatorios
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*'); //Seleciona todos os elementos da Tabela
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');//Gera 4 bytes de caracteres Hexadecimais

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json( {id} );
        }
};