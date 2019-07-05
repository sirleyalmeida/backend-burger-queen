'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.hasMany(models.Orders, { foreignKey: 'userId' });
  };
  return Users;
};