const router = require('express').Router();
const Menu = require('../controllers/menu');

router.get('/', Menu.getMenu);
router.get('/:id', Menu.getMenuId);
router.post('/', Menu.postMenu);
router.put('/:id', Menu.putMenu);
router.delete('/:id', Menu.deleteMenuId);

module.exports = router;