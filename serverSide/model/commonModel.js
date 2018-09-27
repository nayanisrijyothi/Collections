var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    usersSchema = new Schema({
        name: { type: String },
        email: { type: String },
        password: { type: String },
        Location: { type: String }
    }),

    userSchemaModel = mongoose.model('users', usersSchema);

function CommonModel() {
    this.cm = userSchemaModel;
}
CommonModel.prototype.get = function (req, callback) {
    this.cm.find({}, callback);
};
CommonModel.prototype.getId = function (req, callback) {
    this.cm.findOne({ _id: req.params.id }, callback);
};
CommonModel.prototype.create = function (req, callback) {
    this.cm.create(req.body, callback);
};
CommonModel.prototype.update = function (req, data, callback) {
    this.cm.update({ _id: req.params.id }, data, { multi: true }, callback);
};
CommonModel.prototype.remove = function (req, callback) {
    this.cm.remove({ _id: req.params.id }, callback);
};


module.exports = CommonModel;