const Router = require('express');
const router = new Router();
const accessoriesController = require('../controllers/accessoriesController');

router.post('/', accessoriesController.create);
router.get('/', accessoriesController.getAll);
router.get('/:id', accessoriesController.getOne);

module.exports = router;