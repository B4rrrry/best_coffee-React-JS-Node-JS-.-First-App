const Router = require('express');
const router = new Router();
const ForWhatController = require('../controllers/forWhatController');

router.post('/', ForWhatController.create);
router.get('/', ForWhatController.getAll);

module.exports = router;