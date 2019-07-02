const router = require('express').Router();
const models = require('../models');
const Users = models.Users;

router.get('/', (req, resp) => {
  Users.findAll()
    .then(users => {
      // const usersList = users.map(user => user.dataValues)
      resp.send(users)
    });
});

router.get('/:id', (req, resp) => {
  Users.findOne({ where: { id: req.params.id } })
    .then(users => {
      // const userOne = users.map(user => user.dataValues)
      resp.send(users)
    })
});

router.post('/', (req, resp) => {
  Users.create(req.body)
    .then(users => resp.status(201).send(users))
});

router.put('/:id', (req, resp) => {
  Users.update(...req.body), { where: { id: req.params.id } }
    .then(() => {
      Users.findByPK(req.params.id)
        .then(users => resp.send(users.dataValues))
    });
});

router.delete('/:id', (req, resp) => {
  Users.destroy({ where: { id: req.params.id } })
    .then(() => resp.sendStatus(200));
});

module.exports = router;