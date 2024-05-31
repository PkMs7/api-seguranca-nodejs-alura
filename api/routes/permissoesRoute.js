const { Router } = require('express')
const PermissoesController = require('../controllers/permissoesController')

const router = Router()

router
    .post('/permissoes', PermissoesController.cadastrar)
    .get('/permissoes', PermissoesController.buscarTodasPermissoes)
    .get('/permissoes/id/:id')
    .put('/permissoes/id/:id')
    .delete('/permissoes/id/:id')

module.exports = router