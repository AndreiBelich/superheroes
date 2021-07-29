'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsToMany(models.Ability, {
        through: "heroes_to_abilities",
        foreignKey: "heroId"
      });
    }
  };
  Hero.init({
    nickname:{
      field: "nickname",
      allowNull: false,
      type: DataTypes.STRING(64),
      unique: true
    },
    realName: {
      field: "real_name",
      allowNull: false,
      type: DataTypes.STRING(64)
    },
    originDescription: {
      field: "origin_description",
      allowNull: false,
      type: DataTypes.STRING(512)
    },
    catchPhrase: {
      field: "catch_phrase",
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: "heroes",
    underscored: true
  });
  return Hero;
};