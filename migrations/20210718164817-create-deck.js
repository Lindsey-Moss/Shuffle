'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('decks', {
      deckID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deckName: {
        type: Sequelize.STRING
      },
      backImage: {
        type: Sequelize.STRING
      },
      backImgInv: {
        type: Sequelize.STRING
      },
      deckArtist: {
        type: Sequelize.STRING
      },
      deckSummary: {
        type: Sequelize.TEXT
      },
      deckDetails: {
        type: Sequelize.TEXT
      },
      deckLink: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('decks');
  }
};