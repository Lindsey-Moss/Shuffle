'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deckID: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'decks',
          key: 'deckID'
        }
      },
      cardName: {
        type: Sequelize.STRING
      },
      frontImage: {
        type: Sequelize.STRING
      },
      frontImageInv: {
        type: Sequelize.STRING
      },
      backImage: {
        type: Sequelize.STRING
      },
      backImgInv: {
        type: Sequelize.STRING
      },
      cardArtist: {
        type: Sequelize.STRING
      },
      cardDefinition: {
        type: Sequelize.STRING
      },
      cardDetails: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('cards');
  }
};