'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.hasMany(models.Orders, { foreignKey: 'userId' });
  };

  // Users.create({
  //   name: 'ana',
  //   email: 'ana@gmail.com'
  // name: 'sirley',
  // email: 'sirley@gmail.com'
  // })
  return Users;
};