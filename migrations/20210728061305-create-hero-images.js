'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hero_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagePath: {
        field: "image_path",
        allowNull: false,
        type: Sequelize.STRING
      },
      heroId: {
        field: "hero_id",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "heroes",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "restrict"
      },
      createdAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field: "updated_at",
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HeroImages');
  }
};