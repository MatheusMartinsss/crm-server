module.exports = class httpResponse {
    static badRequest(error) {
        return {
            statusCode: 400,
            body: error
        }
    }
    static forbidden(error) {
        return {
            statusCode: 403,
            body: error
        }
    }
    static unauthorized() {
        return {
            statusCode: 401,
            //body: new Unauthorized()
        }
    }
    static notFound(error) {
        return {
            statusCode: 404,
            body: error
        }
    }
    static serverError(error) {
        return {
            statusCode: 500,
            body: {
              //  error: new SeverError(error),
            }
        }
    }
    static ok(data) {
        return {
            statusCode: 200,
            body: data
        }
    }
    static created(data) {
        return {
            statusCode: 201,
            body: data
        }
    }
}