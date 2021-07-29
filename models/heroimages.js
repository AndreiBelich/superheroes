'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HeroImages.init({
    imagePath:{
      allowNull: false,
      type: DataTypes.STRING,
      field: "image_path",
      validate: {
        notNull: false
      }
    },
    heroId: {
      type: DataTypes.INTEGER,
      field: "hero_id",
      allowNull: false,
      validate: {
        notNull: false
      }
    } 
  }, {
    sequelize,
    modelName: 'HeroImages',
    tableName: "hero_images",
    underscored: true
  });
  return HeroImages;
};