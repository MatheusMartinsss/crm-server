module.exports = class ExpressRouterAdapter {
    static adapt(router) {
        return async (req, res) => {
            const httpRequest = {
                body: req?.body,
                user: req?.user,
                params: req?.params,
                headers: req?.headers,
                query: req?.query
            }
            const httpResponse = await router(httpRequest)
            res.status(httpResponse.statusCode).json(httpResponse.body)
        }
    }
}