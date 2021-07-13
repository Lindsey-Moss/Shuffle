'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cards','backImage'),
    queryInterface.removeColumn('cards','backImgInv'),
    queryInterface.addColumn('decks','backImage'),
    queryInterface.addColumn('decks','backImgInv'),
    queryInterface.changeColumn('users','userName', {
      type: Sequelize.STRING,
      allowNull:false
    }),
    queryInterface.changeColumn('users','zipCode', {
      type: Sequelize.STRING
    }),
    queryInterface.changeColumn('users','zodiac', {
      type:Sequelize.ENUM,
      values: ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn',"Don't know/Don't care"],
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cards','backImage'),
    queryInterface.addColumn('cards','backImgInv'),
    queryInterface.removeColumn('decks','backImage'),
    queryInterface.removeColumn('decks','backImgInv'),
    queryInterface.changeColumn('users','userName', {
      type: Sequelize.STRING,
      allowNull:true
    }),
    queryInterface.changeColumn('users','zipCode', {
      type: Sequelize.INTEGER
    }),
    queryInterface.changeColumn('users','zodiac', {
      type:Sequelize.ENUM('Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn',"Don't know/Don't care"),
    })
    
  }
};
