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

}

module.exports = PerfisUsuariosController