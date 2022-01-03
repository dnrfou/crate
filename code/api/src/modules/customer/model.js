'use strict'

// Customer
module.exports = function(sequelize, DataTypes) {
  let Customer = sequelize.define('customer', {
    image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    job: {
      type: DataTypes.STRING
    }
  })

  Customer.associate = function(models) {
    Customer.hasMany(models.Subscription)
  }

  return Customer
}