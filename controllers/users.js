const models = require('../models');
const Users = models.Users;

const getUsers = (req, resp) =>
    Users
        .findAll()
        .then(users => resp.send(users));

const getUser = (req, resp) =>
    Users
        .findOne({ where: { id: req.params.id } })
        .then(user => resp.send(user));

const postUser = (req, resp) =>
    Users
        .create(req.body)
        .then(user => resp.status(201).send(user));

const putUser = (req, resp) => {
    Users
        .update({ ...req.body }, { where: { id: req.params.id } })
        .then(() => {
            Users.findByPk(req.params.id)
                .then(user => resp.send(user.dataValues))
        });
};

const deleteUser = (req, resp) => {
    Users
        .destroy({ where: { id: req.params.id } })
        .then(() => resp.sendStatus(200));
};

module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
};