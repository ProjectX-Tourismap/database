module.exports = (sequelize, DataTypes) => {
  const columns = {
    name: {
      unique: 'geo',
      allowNull: false,
      type: DataTypes.STRING,
    },
    desc: DataTypes.TEXT('medium'),
    picture: DataTypes.TEXT,
    category_id: {
      unique: 'geo',
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    geo: {
      allowNull: false,
      type: DataTypes.GEOMETRY,
    },
    geo_text: {
      unique: 'geo',
      allowNull: false,
      type: DataTypes.STRING(40),
    },
    pref_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    city_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  };
  if (process.env.DB_DIALECT === 'sqlite') delete columns.geo;
  const entities = sequelize.define('entities', columns, {});
  entities.associate = (models) => {
    entities.hasMany(models.zoo_data, { foreignKey: 'entity_id' });
    entities.hasMany(models.temple_data, { foreignKey: 'entity_id' });
    entities.hasMany(models.manholemap_data, { foreignKey: 'entity_id' });
  };
  return entities;
};
