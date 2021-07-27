'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        field: "nickname",
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      realName: {
        field: "real_name",
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      catchPhrase: {
        field: "catch_phrase",
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      originDescription: {
        field: "origin_description",
        allowNull: false,
        type: Sequelize.STRING(512)
      },
      superpowers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      images: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes');
  }
};