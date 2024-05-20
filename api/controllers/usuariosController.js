const UsuariosService = require('../services/usuariosService')

const usuariosService = new UsuariosService()

class UsuariosController {

    static async cadastrar(req, res) {
        const { nome , email, senha} = req.body

        try {

            const usuario = await usuariosService.cadastrar({ nome, email, senha })
    
            res.status(201).send(usuario)
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

    static async buscarTodosUsuarios(req, res) {

        const usuarios = await usuariosService.buscarTodosUsuarios()

        res.status(200).json(usuarios)

    }

    static async buscarUsuarioPorId(req, res) {

        try {
            
            const { id } = req.params
            const usuarios = await usuariosService.buscarUsuarioPorId(id)

            res.status(200).json(usuarios)

        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

}

module.exports = UsuariosController