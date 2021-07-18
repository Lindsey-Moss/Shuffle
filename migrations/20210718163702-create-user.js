'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      userID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      userName: {
        type: Sequelize.STRING(18),
        allowNull: false,
        unique: true
      },
      preferredName: Sequelize.STRING(18),
      password: {
        type: Sequelize.STRING
      },
      zipCode: Sequelize.STRING,
      zodiac: {
        type: Sequelize.ENUM,
        values: ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn',"Don't know/Don't care"],
      },
      image: Sequelize.STRING,
      banner: Sequelize.STRING,
      bio: Sequelize.TEXT,
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