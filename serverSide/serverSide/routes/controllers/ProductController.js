var ProductModel = require('../model/ProductModel');

function ProductController() {
    this.model = new ProductModel();
}
ProductController.prototype.getAll = function (req, res) {
    // this.model.get(req, function (err, data) {
    //     res.status(200).json(data);
    // });
    this.model.aggregate(req, function (err, data) {
        res.status(200).json(data);
    });

};
ProductController.prototype.getById = function (req, res, next) {
    console.log(req.params);
    this.model.getId(req, function (err, data) {
        res.status(200).json(data);
    });
};
ProductController.prototype.create = function (req, res, next) {
    this.model.create(req, function (err, data) {
        res.status(201).json(data);
    });
};

ProductController.prototype.update = function (req, res, next) {
    this.model.update(req, function (err, data) {
        res.status(200).json(data);
    });
};
ProductController.prototype.remove = function (req, res, next) {
    this.model.remove(req, function (err, data) {
        res.status(204).json(data);
    });
};

module.exports = ProductController;