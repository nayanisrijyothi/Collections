var express = require('express'),
    UserController = require('../controllers/UserController.js'),
    ProductController = require('../controllers/ProductController.js'),
    ProductTypeController = require('../controllers/ProductTypeController.js'),

    router = express.Router(),
    uc = new UserController(),
    pc = new ProductController(),
    ptc = new ProductTypeController();

router.get('/user', uc.getAll.bind(uc));
router.get('/user/:id', uc.getById.bind(uc));
router.post('/', uc.create.bind(uc));
router.put('/:id', uc.update.bind(uc));
router.delete('/:id', uc.remove.bind(uc));


router.get('/product', pc.getAll.bind(pc));
router.get('/product/:id', pc.getById.bind(pc));
router.post('/product', pc.create.bind(pc));
router.put('/product/:id', pc.update.bind(pc));
router.delete('product/:id', pc.remove.bind(pc));



router.get('/type', ptc.getAll.bind(ptc));
router.get('/type/:id', ptc.getById.bind(ptc));
router.post('/type', ptc.create.bind(ptc));
router.put('/type/:id', ptc.update.bind(ptc));
router.delete('/type/:id', ptc.remove.bind(ptc));


module.exports = router;