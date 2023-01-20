const { createNegociacaoRouter, listNegociacoesRouter, findNegociacaoRouter, removeNegociacaoRouter, updateNegociacaoRouter } = require('../../presentation/negociacao')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
module.exports = router => {
    router.post('/negociacao', validate(authMiddleware), adapt(createNegociacaoRouter))
    router.get('/negociacoes', validate(authMiddleware), adapt(listNegociacoesRouter))
    router.get('/negociacao/:id', validate(authMiddleware), adapt(findNegociacaoRouter))
    router.delete('/negociacao/:id', validate(authMiddleware), adapt(removeNegociacaoRouter))
    router.put('/negociacao/:id', validate(authMiddleware), adapt(updateNegociacaoRouter))
}