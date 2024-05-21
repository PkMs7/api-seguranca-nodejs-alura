const { Router } = require('express')
const UsuariosController = require('../controllers/usuariosController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = Router()

router.use(authMiddleware)

router
    .post('/usuarios', UsuariosController.cadastrar)
    .get('/usuarios', UsuariosController.buscarTodosUsuarios)
    .get('/usuarios/id/:id', UsuariosController.buscarUsuarioPorId)
    .put('/usuarios/id/:id', UsuariosController.editarUsuario)
    .delete('/usuarios/id/:id', UsuariosController.deletarUsuario)

module.exports = router