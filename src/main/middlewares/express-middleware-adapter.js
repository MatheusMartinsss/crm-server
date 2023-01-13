module.exports = class ExpressMiddlewareAdapter {
    static validate(router) {
        return async (req, res, next) => {
            const request = {
                accesToken: req.headers?.['authorization'],
                ...(req.headers || {}),
                body: req.body,
                params: req.params
                // user: res.locals.user
            }
            const httpResponse = await router(request, res.locals)
            if (httpResponse.statusCode === 200) {
                Object.assign(req, httpResponse.body)
                next()
            } else {
                res.status(httpResponse.statusCode).json({
                    error: httpResponse.body?.name,
                    message: httpResponse.body?.message,
                    param: httpResponse.body?.param,
                    type: httpResponse.body?.type
                })
            }
        }
    }
}