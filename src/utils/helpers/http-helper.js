module.exports = class httpResponse {
    static badRequest(error) {
        return {
            statusCode: 400,
            body: {
                error: error.name,
                message: error.message
            }
        }
    }
    static forbidden(error) {
        return {
            statusCode: 403,
            body: {
                error: error.name,
                message: error.message
            }
        }
    }
    static unauthorized() {
        return {
            statusCode: 401,
            body: {
                error: error.name,
                message: error.message
            }
        }
    }
    static notFound(error) {
        return {
            statusCode: 404,
            body: {
                error: error.name,
                message: error.message
            }
        }
    }
    static serverError(error) {
        return {
            statusCode: 500,
            body: {
                error: error?.name,
                message: error?.message
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