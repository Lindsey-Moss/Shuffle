'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { 
        isEmail: true,
        notNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      validate: { 
        isEmail: true,
        notNull: true
      }
    })
  }
};
