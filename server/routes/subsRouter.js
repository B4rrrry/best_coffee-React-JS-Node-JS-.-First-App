const Router = require('express');
const router = new Router();
const subscribersController = require('../controllers/subscribersController');

router.post('/', subscribersController.create);
router.get('/', subscribersController.getAll);

module.exports = router;