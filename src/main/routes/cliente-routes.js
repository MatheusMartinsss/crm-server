
const authMiddleware = require("../middlewares/auth-middleware")
const { createClienteRouter, findClienteRouter, listClientesRouter, updateClientesRouter } = require('../../presentation/clientes/')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
module.exports = router => {
    router.post('/cliente', validate(authMiddleware), adapt(createClienteRouter))
    router.get('/clientes', validate(authMiddleware), adapt(listClientesRouter))
    router.put('/cliente/:id', validate(authMiddleware), adapt(updateClientesRouter))
    router.get('/cliente/:id', validate(authMiddleware), adapt(findClienteRouter))

}