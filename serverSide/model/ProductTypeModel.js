var mongoose = require('mongoose'),
    Schema = mongoose.Schema,


    productTypeSchema = new Schema({
        product_id: { type: String },
        quantity_name: { type: String },
        Price: { type: Number }
    }),

    productTypeSchemaModel = mongoose.model('productTypeSchema', productTypeSchema);
function productTypeModel() {
    this.cm = productTypeSchemaModel;
}
productTypeModel.prototype.get = function (req, callback) {
    this.cm.find({}, callback);
};
productTypeModel.prototype.getId = function (req, callback) {
    this.cm.findOne({ _id: req.params.id }, callback);
};
productTypeModel.prototype.create = function (req, callback) {
    this.cm.create(req.body, callback);
};
productTypeModel.prototype.update = function (req, data, callback) {
    this.cm.update({ _id: req.params.id }, data, { multi: true }, callback);
};
productTypeModel.prototype.remove = function (req, callback) {
    this.cm.remove({ _id: req.params.id }, callback);
};


module.exports = productTypeModel;