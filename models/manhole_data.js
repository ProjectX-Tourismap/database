'use strict';
module.exports = (sequelize, DataTypes) => {
  const manholeData = sequelize.define('manhole_data', {
    entity_id: {
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    manholemap_id: {
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  return manholeData;
};
