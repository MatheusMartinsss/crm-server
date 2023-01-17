
const authMiddleware = require("../middlewares/auth-middleware")
const createClienteRouter = require('../../presentation/clientes/create-cliente-router')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
module.exports = router => {
    router.post('/cliente', validate(authMiddleware), adapt(createClienteRouter))

}