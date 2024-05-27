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

    async buscarPerfilDeUsuarioPorId(id){

        const perfilDeUsuario = await database.perfisUsuarios.findOne({
            where: {
                id: id
            }
        })

        if (!perfilDeUsuario) {

            throw new Error('Perfil de usuário não cadastrado!')

        }

        return perfilDeUsuario

    }

    async editarPerfilDeUsuario(dto) {

        const perfilDeUsuario = await this.buscarPerfilDeUsuarioPorId(dto.id)

        try {

            perfilDeUsuario.nome = dto.nome
            perfilDeUsuario.descricao = dto.descricao

            await perfilDeUsuario.save()

            return perfilDeUsuario
            
        } catch (error) {

            throw new Error('Perfil de usuário não pôde ser editado!')
            
        }

    }

    async deletarPerfilDeUsuario(id) {

        await this.buscarPerfilDeUsuarioPorId(id)

        try {

            await database.perfisUsuarios.destroy({

                where: {
                    id: id
                }

            })
            
        } catch (error) {

            throw new Error('Erro ao tentar deletar o perfil de usuário!')
            
        }

    }

}

module.exports = PerfisUsuariosService