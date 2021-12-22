'use strict';
module.exports = (sequelize, DataTypes) => {
  const manufacturings = sequelize.define('manufacturings', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  }, {timestamps: false});
  manufacturings.associate = function(models) {
    // associations can be defined here
    manufacturings.hasMany(models.activities, {
      foreignKey: 'manufacturingName'
    })
  };
  return manufacturings;
};