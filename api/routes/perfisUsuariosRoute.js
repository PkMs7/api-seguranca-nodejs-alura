const { Router } = require('express')
const PerfisUsuariosController = require('../controllers/perfisUsuariosController')

const router = Router()

router
    .post('/perfisUsuarios', PerfisUsuariosController.cadastrar)
    .get('/perfisUsuarios', PerfisUsuariosController.buscarTodosPerfisDeUsuarios)
    .get('/perfisUsuarios/id/:id', PerfisUsuariosController.buscarPerfilDeUsuarioPorId)
    .put('/perfisUsuarios/id/:id', PerfisUsuariosController.editarPerfilDeUsuario)
    .delete('/perfisUsuarios/id/:id', PerfisUsuariosController.deletarPerfilDeUsuario)

module.exports = router