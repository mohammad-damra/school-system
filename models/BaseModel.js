class BaseModel {
    constructor(model) {
        this.schema = model;
    }

    async create(data) {
        const model = new this.schema(data);
        return model.save();
    }

    async get(id) {
        return this.schema.findById(id);
    }

    async index() {
        return this.schema.find();
    }

    async update(id, data) {
        return this.schema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return this.schema.findByIdAndDelete(id);
    }
}

module.exports = BaseModel;