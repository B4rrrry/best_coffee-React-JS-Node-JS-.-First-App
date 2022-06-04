const Router = require('express');
const router = new Router();
const favoritesController = require('../controllers/favoritesController');

router.post('/', favoritesController.create);
router.post('/prod', favoritesController.getAll);
router.get('/:id', favoritesController.getOne);

module.exports = router;