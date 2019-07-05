const models = require('../models');
const Menu = models.Menu;

const getMenu = (req, resp) =>
    Menu
        .findAll()
        .then(menu => resp.send(menu));

const getMenuId = (req, resp) =>
    Menu
        .findOne({ where: { id: req.params.id } })
        .then(menuId => resp.send(menuId));

const postMenu = (req, resp) =>
    Menu
        .create(req.body)
        .then(menu => resp.status(201).send(menu));

const putMenu = (req, resp) => {
    Menu
        .update({ ...req.body }, { where: { id: req.params.id } })
        .then(() => {
            Menu.findByPk(req.params.id)
                .then(menu => resp.send(menu.dataValues))
        });
};

const deleteMenuId = (req, resp) => {
    Menu
        .destroy({ where: { id: req.params.id } })
        .then(() => resp.sendStatus(200));
};

module.exports = {
    getMenu,
    getMenuId,
    postMenu,
    putMenu,
    deleteMenuId
};