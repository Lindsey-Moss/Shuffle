'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','email', {
      type: Sequelize.STRING,
      allowNull:false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','email', {
      type: Sequelize.STRING,
      allowNull:true
    })
  }
};
