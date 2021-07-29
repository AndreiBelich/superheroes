'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroToAbility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HeroToAbility.init({
    heroId:{
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: "hero_id",
      allowNull: false,
      references: {
        model: "heroes",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "restrict"
    },
    abilityId: {
      allowNull: false,
      primaryKey: true,
      field: "ability_id",
      type: DataTypes.INTEGER,
      references: {
        model: "abilities",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "restrict"
    },
  }, {
    sequelize,
    modelName: 'HeroToAbility',
    tableName: "heroes_to_abilities",
    underscored: true
  });
  return HeroToAbility;
};