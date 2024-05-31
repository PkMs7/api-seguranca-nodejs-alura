const PermissoesService = require('../services/permissoesService')
const permissoes = new PermissoesService()

class PermissoesController {

    static async cadastrar(req, res) {

        const { nome, descricao } = req.body

        try {

            const permissao = await permissoes.cadastrar({ nome, descricao })

            res.status(200).send(permissao)
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

    static async buscarTodasPermissoes(req, res) {

        const todasPermissoes = await permissoes.buscarTodasPermissoes()

        res.status(200).json(todasPermissoes)

    }

}

module.exports = PermissoesController