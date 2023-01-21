const { createTagsRouter } = require('../../presentation/tags')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
const authMiddleware = require('../middlewares/auth-middleware')
module.exports = router => {
    router.post('/tags', validate(authMiddleware), adapt(createTagsRouter))
    
}