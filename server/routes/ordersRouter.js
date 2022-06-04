const Router = require('express');
const router = new Router();
const OrdersController = require('../controllers/ordersController');

router.post('/', OrdersController.create)
router.get('/', OrdersController.getAll)

module.exports = router;

module.exports = router;