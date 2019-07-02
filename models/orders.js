'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.Users, {
      foreignKey: 'userId'
    });
    Orders.hasMany(models.OrdersMenu, {
      foreignKey: 'orderId'
    });
  };
  return Orders;
};