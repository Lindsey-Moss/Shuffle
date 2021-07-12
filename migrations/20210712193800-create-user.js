'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      userID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      email: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      pwDigest: {
        type: Sequelize.STRING
      },
      preferredName: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.INTEGER(5)
      },
      zodiac: {
        type: Sequelize.ENUM('Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn',"Don't know/Don't care")
      },
      image: {
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
    await queryInterface.dropTable('users');
  }
};