const Router = require('express');
const router = new Router();
const rubricsController = require('../controllers/rubricsController');

router.post('/', rubricsController.create);
router.get('/', rubricsController.getAll);

module.exports = router;

