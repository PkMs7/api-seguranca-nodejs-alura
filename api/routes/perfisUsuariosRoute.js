const { Router } = requiere('express')

const router = Router()

router
    .post('/perfisUsuarios')
    .get('/perfisUsuarios')
    .get('/perfisUsuarios/id/:id')
    .put('/perfisUsuarios/id/:id')
    .delete('/perfisUsuarios/id/:id')

module.exports = router