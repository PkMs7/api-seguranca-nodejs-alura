const { Router } = require('express')

const router = Router()

router
    .post('/permissoes')
    .get('/permissoes')
    .get('/permissoes/id/:id')
    .put('/permissoes/id/:id')
    .delete('/permissoes/id/:id')

module.exports = router