'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ability.belongsToMany(models.Hero, {
        through: "heroes_to_abilities",
        foreignKey: "abilityId"
      });
    }
  };
  Ability.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notNull: true
      }
    } 
  }, {
    sequelize,
    modelName: 'Ability',
    tableName: "abilities",
    underscored: true
  });
  return Ability;
};