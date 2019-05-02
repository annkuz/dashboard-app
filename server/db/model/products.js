'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};