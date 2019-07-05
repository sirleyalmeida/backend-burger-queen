const router = require('express').Router();
const Orders = require('../controllers/orders');

router.get('/', Orders.getOrders);
router.get('/:id', Orders.getOrder);
router.post('/', Orders.postOrder);
router.put('/:id', Orders.putOrder);
router.delete('/:id', Orders.deleteOrder);

module.exports = router;