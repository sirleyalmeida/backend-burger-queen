const models = require('../models');
const Orders = models.Orders;
const Users = models.Users;
const OrdersMenu = models.OrdersMenu;
const Menu = models.Menu;

const getOrders = (req, resp) =>
    Orders
        .findAll({ include: [{ model: OrdersMenu, include: [Menu] }, Users] })
        .then(orders => resp.send(orders));

const getOrder = (req, resp) =>
    Orders
        .findOne({ where: { id: req.params.id } }, { include: [{ model: OrdersMenu, include: [Menu] }, Users] })
        .then(order => order ? resp.send(order) : resp.sendStatus(404));

const postOrder = (req, resp) =>
    Orders
        .create(req.body, { include: [OrdersMenu] })
        .then(order =>
            order ? resp.sendStatus(201).send(order) : resp.sendStatus(404));

const putOrder = (req, resp) => {
    Orders
        .update({ ...req.body }, { where: { id: req.params.id } })
        .then(() => {
            Orders
                .findByPk(req.params.id)
                .then(order => resp.send(order));
        });
};

const deleteOrder = (req, resp) => {
    OrdersMenu
        .destroy({ where: { OrderId: req.params.id } })
    Orders
        .destroy({ where: { id: req.params.id } })
        .then(() => resp.sendStatus(200));
};

module.exports = {
    getOrders,
    getOrder,
    postOrder,
    putOrder,
    deleteOrder
};