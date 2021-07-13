'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users','pwDigest','password')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users','password','pwDigest')
  }
};
