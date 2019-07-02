'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersMenu = sequelize.define('OrdersMenu', {
    menuId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {});
  OrdersMenu.associate = function (models) {
    OrdersMenu.belongsTo(models.Orders, {
      foreignKey: 'orderId'
    });
    OrdersMenu.belongsTo(models.Menu, {
      foreignKey: 'menuId'
    });
  };
  return OrdersMenu;
};