'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('entries','inJournal',{
      type:Sequelize.BOOLEAN
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('entries','inJournal')
  }
};
