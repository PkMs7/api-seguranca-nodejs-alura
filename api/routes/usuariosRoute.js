const { Router } = require('express')
const UsuariosController = require('../controllers/usuariosController')

const router = Router()

router
    .post('/usuarios', UsuariosController.cadastrar)
    .get('/usuarios')
    .get('/usuarios/id/:id')
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')

module.exports = router