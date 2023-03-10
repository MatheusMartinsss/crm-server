const { createTagsRouter, listTagsRouter, findTagByIdRouter, updateTagRouter } = require('../../presentation/tags')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
const authMiddleware = require('../middlewares/auth-middleware')
module.exports = router => {
    router.post('/tags', validate(authMiddleware), adapt(createTagsRouter))
    router.get('/tags', validate(authMiddleware), adapt(listTagsRouter))
    router.get('/tag/:id', validate(authMiddleware), adapt(findTagByIdRouter))
    router.put('/tag/:id', validate(authMiddleware), adapt(updateTagRouter))
    
}