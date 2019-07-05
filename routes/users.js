const router = require('express').Router();
const Users = require('../controllers/users');

router.get('/', Users.getUsers);
router.get('/:id', Users.getUser);
router.post('/', Users.postUser);
router.put('/:id', Users.putUser);
router.delete('/:id', Users.deleteUser);

module.exports = router;