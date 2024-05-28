const database = require('../models')
const uuid = require('uuid')

class PermissoesService {

    async cadastrar(dto){

        const permissao = await database.permissoes.findOne({
            
            where: {
                nome: dto.nome
            }

        })

        if (permissao) {

            throw new Error('Permissão já cadastrada!')

        }

        try {

            const novaPermissao = await database.permissoes.create({

                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao

            })

            return novaPermissao
            
        } catch (error) {

            throw new Error('Erro ao cadastrar permissão!')
            
        }

    }

}

module.exports = PermissoesService