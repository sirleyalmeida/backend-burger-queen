const models = require('../models');
const Orders = models.Orders;
const OrdersMenu = models.OrdersMenu;
const Menu = models.Menu;

const getOrdersMenu = (req, resp) =>
    OrdersMenu
        .findAll({ include: [Menu] })
        .then(ordersMenu => resp.send(ordersMenu));

const getOrderMenu = (req, resp) =>
    OrdersMenu
        .findOne({ where: { id: req.params.id } }, { include: [Menu] })
        .then(orderMenu => orderMenu ? resp.send(orderMenu) : resp.sendStatus(404));

const postOrderMenu = (req, resp) =>
    OrdersMenu
        .create(req.body, { include: [Menu, Orders] })
        .then(orderMenu =>
            orderMenu ? resp.sendStatus(201).send(orderMenu) : resp.sendStatus(404));


const putOrderMenu = (req, resp) => {
    OrdersMenu
        .update({ ...req.body }, { where: { id: req.params.id } })
        .then(() => {
            OrdersMenu
                .findByPk(req.params.id)
                .then(orderMenu => resp.send(orderMenu));
        });
};

const deleteOrderMenu = (req, resp) => {
    Menu
        .destroy({ where: { OrderId: req.params.id } })
    OrdersMenu
        .destroy({ where: { id: req.params.id } })
        .then(() => resp.sendStatus(200));
};

module.exports = {
    getOrdersMenu,
    getOrderMenu,
    postOrderMenu,
    putOrderMenu,
    deleteOrderMenu
};