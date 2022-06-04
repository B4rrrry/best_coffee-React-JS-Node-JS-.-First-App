const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();


router.post('/', basketController.create);
router.get('/:id', basketController.getOne);
router.post('/delete', basketController.deleteProduct);
router.post('/update', basketController.updateProduct);
router.get('/totalprice/:id', basketController.getTotalPrice);


module.exports = router;