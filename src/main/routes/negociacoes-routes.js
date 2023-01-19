const { createNegociacaoRouter } = require('../../presentation/negociacao')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
module.exports = router => {
    router.post('/negociacao', validate(authMiddleware), adapt(createNegociacaoRouter))
  
}