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

    static async buscarPermissaoPorId(req, res) {

        try {

            const { id } = req.params

            const permissao = await permissoes.buscarPermissaoPorId(id)

            res.status(200).json(permissao)
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

    static async editarPermissao(req, res) {

        const { id } = req.params
        const { nome, descricao } = req.body

        try {

            const permissao = await permissoes.editarPermissao({ id, nome, descricao })

            res.status(200).json(permissao)
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

    static async deletarPermissao(req, res) {

        const { id } = req.params

        try {

            await permissoes.deletarPermissao(id)

            res.status(200).send({ message: 'Permissão deletada com sucesso!' })
            
        } catch (error) {

            res.status(400).send({ message: error.message })
            
        }

    }

}

module.exports = PermissoesController