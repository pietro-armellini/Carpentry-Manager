'use strict';
module.exports = (sequelize, DataTypes) => {
  const commissions = sequelize.define('commissions', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  }, {timestamps: false});
  commissions.associate = function(models) {
    // associations can be defined here
    commissions.hasMany(models.activities, {
      foreignKey: 'commissionName'
    })
  };
  return commissions;
};