const database = require('../models')
const uuid = require('uuid')

class PerfisUsuariosService {

    async cadastrar(dto) {

        const perfilUsuario = await database.perfisUsuarios.findOne({
            where: {
                nome: dto.nome
            }
        })

        if (perfilUsuario) {

            throw new Error('Perfil de usuário já cadastrado')

        }

        try {

            const novoPerfilUsuario = await database.perfisUsuarios.create({

                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao

            })

            return novoPerfilUsuario

        } catch (error) {

            throw new Error('Erro ao cadastrar perfil de usuário')

        }

    }

    async buscarTodosPerfisDeUsuarios(){

        const perfisDeUsuarios = await database.perfisUsuarios.findAll()

        return perfisDeUsuarios

    }

}

module.exports = PerfisUsuariosService