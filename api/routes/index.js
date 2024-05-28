const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuarios = require('./usuariosRoute')
const auth = require('./authRoute')
const perfisUsuarios = require('./perfisUsuariosRoute')
const permissoes = require('./permissoesRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    produto,
    perfisUsuarios,
    permissoes
  )
}
