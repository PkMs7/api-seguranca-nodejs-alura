const { Router } = require('express')
const PerfisUsuariosController = require('../controllers/perfisUsuariosController')

const router = Router()

router
    .post('/perfisUsuarios', PerfisUsuariosController.cadastrar)
    .get('/perfisUsuarios', PerfisUsuariosController.buscarTodosPerfisDeUsuarios)
    .get('/perfisUsuarios/id/:id')
    .put('/perfisUsuarios/id/:id')
    .delete('/perfisUsuarios/id/:id')

module.exports = router