module.exports = class CreateQuerySequelize {

    constructor() {
        this.query = {
            where: {},
            attributes: {
                exclude: [],
                include: []
            },
            include: []
        }
    }
    getQuery() {
        return this.query
    }
    setWhere(columTable) {
        Object.assign(this.query.where, columTable)
        return this
    }
    setWhereOr(columTable) {
        Object.assign(this.query.where, { $or: columTable })
        return this
    }
    setWhereAnd(columTable) {
        Object.assign(this.query.where, { $and: columTable })
        return this
    }
    setAttributesExclude(columTable) {
        Object.assign(this.query.attributes.exclude, columTable)
        return this
    }
    setAttributesInclude(columTable) {
        Object.assign(this.query.attributes.include, columTable)
        return this
    }
    setIncludes(modelObject) {
        Object.assign(this.query.include, modelObject)
        return this
    }
    setIncludesWhere(model, columTable) {
        const _model = this.query.include.find((m) => m.model == model)
        Object.assign(_model, { where: columTable })
        return this
    }
    setIncludesAttributesInclude(model, attributes) {
        const _model = this.query.include.find((m) => m.model == model)
        Object.assign(_model, {
            attributes: {
                include: attributes
            }
        })
        return this
    }
    setIncludesAttributesExclude(model, attributes) {
        const _model = this.query.include.find((m) => m.model == model)
        Object.assign(_model, {
            attributes: {
                exclude: attributes
            }
        })
        return this
    }
    setIncludesAssociations(model, modelObject) {
        const _model = this.query.include.find((m) => m.model == model)
        Object.assign(_model, { include: [modelObject] })
        return this
    }
}