'use strict';

module.exports = (sequelize, DataTypes) => {
  const manufactures = sequelize.define(
      'manufactures',
      {name: {type: DataTypes.STRING, primaryKey: true, allowNull: false}},
      {timestamps: false});
  manufactures.associate = function(models) {
    // associations can be defined here
    manufactures.hasMany(models.activities, {foreignKey: 'manufactureName'})
  };
  return manufactures;
};