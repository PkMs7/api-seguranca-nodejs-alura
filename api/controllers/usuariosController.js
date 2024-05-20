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

}

module.exports = UsuariosController