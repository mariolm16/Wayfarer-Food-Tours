'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.User, { foreignKey: 'currentCity' })
    City.hasMany(models.Post, { foreignKey: 'cityId' })
  };
  return City;
};