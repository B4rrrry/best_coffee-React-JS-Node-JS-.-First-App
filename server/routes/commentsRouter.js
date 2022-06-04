const Router = require('express');
const router = new Router();
const commentsController = require('../controllers/commentsController.js');

router.post('/', commentsController.create);
router.post('/', commentsController.getAll);

module.exports = router;