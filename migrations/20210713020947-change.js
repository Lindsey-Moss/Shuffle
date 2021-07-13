'use strict';

const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cards','backImage'),
    queryInterface.removeColumn('cards','backImgInv'),
    queryInterface.addColumn('decks','backImage',{
      type:Sequelize.STRING
    }),
    queryInterface.addColumn('decks','backImgInv', {
      type:Sequelize.STRING
    }),
    queryInterface.changeColumn('users','userID', {
      defaultValue: uuidv4()
    }),
    queryInterface.changeColumn('users','userName', {
      type: Sequelize.STRING,
      allowNull:false
    }),
    queryInterface.changeColumn('users','zipCode', {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cards','backImage'),
    queryInterface.addColumn('cards','backImgInv', {
      type:Sequelize.STRING
    }),
    queryInterface.removeColumn('decks','backImage'),
    queryInterface.removeColumn('decks','backImgInv'),
    queryInterface.changeColumn('users','userID', {
      defaultValue: Sequelize.UUIDV1
    }),
    queryInterface.changeColumn('users','userName', {
      type: Sequelize.STRING,
      allowNull:true
    }),
    queryInterface.changeColumn('users','zipCode', {
      type: Sequelize.INTEGER
    })
    
  }
};
