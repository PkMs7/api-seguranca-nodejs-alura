const { Router } = require('express')
const PermissoesController = require('../controllers/permissoesController')

const router = Router()

router
    .post('/permissoes', PermissoesController.cadastrar)
    .get('/permissoes', PermissoesController.buscarTodasPermissoes)
    .get('/permissoes/id/:id', PermissoesController.buscarPermissaoPorId)
    .put('/permissoes/id/:id', PermissoesController.editarPermissao)
    .delete('/permissoes/id/:id', PermissoesController.deletarPermissao)

module.exports = router