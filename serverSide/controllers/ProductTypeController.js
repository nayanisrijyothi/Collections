var ProductTypeModel = require('../model/ProductTypeModel');

function ProductTypeController() {
    this.model = new ProductTypeModel();
}
ProductTypeController.prototype.getAll = function (req, res) {
    this.model.get(req,function(err,data){
        res.status(200).json(data);
    });
};
ProductTypeController.prototype.getById = function (req, res, next) {
    console.log( req.params);
    this.model.getId(req,function(err,data){
        res.status(200).json(data);
    });
};
ProductTypeController.prototype.create = function (req, res, next) {
    this.model.create(req,function(err,data){
        res.status(201).json(data);
    });
};

ProductTypeController.prototype.update = function (req, res, next) {
    console.log("info at getById method in UserController.", req);
    this.model.update(req,function(err,data){
        res.status(200).json(data);
    });
};
ProductTypeController.prototype.remove = function (req, res, next) {
    console.log("info at getById method in UserController.", req);
    this.model.remove(req,function(err,data){
        res.status(204).json(data);
    });
};

module.exports = ProductTypeController;