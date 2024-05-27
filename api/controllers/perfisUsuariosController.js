const PerfisUsuariosService = require('../services/perfisUsuariosService')
const perfisUsuarios = new PerfisUsuariosService()

class PerfisUsuariosController {

    static async cadastrar(req, res) {

        const { nome, descricao } = req.body
    
        try {

            const perfilUsuario = await perfisUsuarios.cadastrar({ nome, descricao })

            res.status(201).send(perfilUsuario)
            
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

    }

    static async buscarTodosPerfisDeUsuarios(req, res){

        const perfisDeUsuarios = await perfisUsuarios.buscarTodosPerfisDeUsuarios()

        res.status(200).json(perfisDeUsuarios)

    }

    static async buscarPerfilDeUsuarioPorId(req, res) {

        try {

            const { id } = req.params
            const perfilDeUsuario = await perfisUsuarios.buscarPerfilDeUsuarioPorId(id)

            res.status(200).json(perfilDeUsuario)
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

    static async editarPerfilDeUsuario(req, res) {

        const { id } = req.params
        const { nome, descricao } = req.body

        try {

            const perfilDeUsuario = await perfisUsuarios.editarPerfilDeUsuario({ id, nome, descricao })

            res.status(200).send(perfilDeUsuario)
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

    static async deletarPerfilDeUsuario(req, res) {

        const { id } = req.params

        try {

            await perfisUsuarios.deletarPerfilDeUsuario(id)

            res.status(200).send({ message: 'Usuario deletado com sucesso' })
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

}

module.exports = PerfisUsuariosController