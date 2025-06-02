const bcrypt = require("bcrypt");
const UserModel = require("./UserModel");

class BaseUserModel {
    constructor(model) {
        this.schema = model;
    }

    async create(data) {
        const model = new this.schema(data);
        const result = await model.save();
        let copyResult = result.toObject();
        const user = new UserModel();
        await user.create(copyResult);
        return result;
    }

    async get(id) {
        return this.schema.findById(id);
    }

    async index() {
        return this.schema.find();
    }

    async update(id, data) {
        if (data.password)
            data.password = await bcrypt.hash(data.password, 10);
        const result = await this.schema.findByIdAndUpdate(id, data, { new: true });
        const user = new UserModel();
        await user.update(id, result?.toObject());
        return result;
    }

    async delete(id) {
        const result = await this.schema.findByIdAndDelete(id);
        const user = new UserModel();
        await user.delete(id);
        return result;
    }
}

module.exports = BaseUserModel;