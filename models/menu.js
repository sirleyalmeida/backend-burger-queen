'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    product: DataTypes.STRING,
    menuType: DataTypes.STRING,
    price: DataTypes.REAL,
  }, {});
  Menu.associate = function (models) {
    Menu.hasMany(models.OrdersMenu, {
      foreignKey: 'menuId'
    });
  };
  return Menu;
};