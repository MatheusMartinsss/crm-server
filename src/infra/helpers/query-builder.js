module.exports = class CreateQuerySequelize {

    constructor() {
        this.query = {
            where: {},
            include: [],

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
    addAttributes(attributes) {
        Object.assign(this.query, { attributes: attributes })
        return this
    }
    addGroup(group) {
        Object.assign(this.query, { group: group })
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
            attributes:
                attributes

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
        if (_model?.include?.length) {//verify if the model already have another association, case have, this gona iterate the associations and add the new association. Is horrible but work ;)
            Object.assign(_model, { include: [..._model.include, modelObject] })
        } else {
            Object.assign(_model, { include: [modelObject] })
        }
        return this
    }
    setIncludesAssociationsAttributes(model1, model2, attributes) {
        const _model = this.query.include.find((m) => m.model == model1).include.find((m) => m.model == model2)
        Object.assign(_model, { attributes: attributes })
        return this
    }
}