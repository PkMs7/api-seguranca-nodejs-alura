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

    async buscarTodasPermissoes(){

        const permissoes = await database.permissoes.findAll()

        return permissoes

    }

    async buscarPermissaoPorId(id) {

        const permissao = await database.permissoes.findOne({

            where: {

                id: id

            }

        })

        if (!permissao) {

            throw new Error('Permissão não cadastrada!')

        }

        return permissao

    }

}

module.exports = PermissoesService