'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes_to_abilities', {
      heroId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "hero_id",
        type: Sequelize.INTEGER,
        references: {
          model: "heroes",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "restrict"
      },
      abilityId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "ability_id",
        type: Sequelize.INTEGER,
        references: {
          model: "abilities",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "restrict"
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes_to_abilities');
  }
};
