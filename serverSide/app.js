var express = require('express'),
    async = require('async'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
//mongoDbUri = 'mongodb://username:password@host:port/collectionName';
async.apply(mongoose.connect('mongodb://localhost:27017/Demo', {
    useMongoClient: true
}));
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + 'mongodb://localhost:27017/Demo');
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});
app.get('/', function (req, res) {
    return res.send({
        message: "Welcome To API!"
    });
});
function parallel(middlewares) {
    return function (req, res, next) {
        async.each(middlewares, function (mw, cb) {
            mw(req, res, cb);
        }, next);
    };
}
app.use(parallel([
    bodyParser.json({ limit: '1000mb', extended: true }),
    bodyParser.urlencoded({ limit: '1000mb', extended: true })
]));
app.use('/v1', require('./routes/candidatesroute'));

app.listen(3000);
app.use(function (err, req, res, next) {
    //log.info("This is error handling function");
    //log.error(req, err);
    res.status(err.status).send(err);
});

module.exports = app;
