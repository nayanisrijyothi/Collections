var ChallengesModel = require('../model/commonModel');
console.log("her");
function UserController() {
    this.model = new ChallengesModel();
}
UserController.prototype.getAll = function (req, res) {
    this.model.get(req,function(err,data){
        res.status(200).json(data);
    });
};
UserController.prototype.getById = function (req, res, next) {
    console.log( req.params);
    this.model.getId(req,function(err,data){
        res.status(200).json(data);
    });
};
UserController.prototype.create = function (req, res, next) {
    this.model.create(req,function(err,data){
        res.status(201).json(data);
    });
};

UserController.prototype.update = function (req, res, next) {
    console.log("info at getById method in UserController.", req);
    this.model.update(req,function(err,data){
        res.status(200).json(data);
    });
};
UserController.prototype.remove = function (req, res, next) {
    console.log("info at getById method in UserController.", req);
    this.model.remove(req,function(err,data){
        res.status(204).json(data);
    });
};

module.exports = UserController;