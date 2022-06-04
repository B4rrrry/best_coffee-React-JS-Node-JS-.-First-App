const Router = require('express');
const router = new Router();
const BackCallsController = require('../controllers/backCallsController');

router.post('/', BackCallsController.create)
router.get('/', BackCallsController.getAll)

module.exports = router;