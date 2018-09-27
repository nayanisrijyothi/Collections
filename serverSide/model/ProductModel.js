var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    productsSchema = new Schema({
        product_name: { type: String },
        description: { type: String },
        Location: { type: String }
    }),

    productsSchemaModel = mongoose.model('productsSchema', productsSchema);

function ProductModel() {
    this.cm = productsSchemaModel;
}
ProductModel.prototype.get = function (req, callback) {
    this.cm.find({}, callback);
};
ProductModel.prototype.getId = function (req, callback) {
    this.cm.findOne({ _id: req.params.id }, callback);
};
ProductModel.prototype.create = function (req, callback) {
    this.cm.create(req.body, callback);
};
ProductModel.prototype.update = function (req, data, callback) {
    this.cm.update({ _id: req.params.id }, data, { multi: true }, callback);
};
ProductModel.prototype.remove = function (req, callback) {
    this.cm.remove({ _id: req.params.id }, callback);
};


module.exports = ProductModel;