const router = require('express').Router();
const OrdersMenu = require('../controllers/ordersmenu');

router.get('/', OrdersMenu.getOrdersMenu);
router.get('/:id', OrdersMenu.getOrderMenu);
router.post('/', OrdersMenu.postOrderMenu);
router.put('/:id', OrdersMenu.putOrderMenu);
router.delete('/:id', OrdersMenu.deleteOrderMenu);

module.exports = router;