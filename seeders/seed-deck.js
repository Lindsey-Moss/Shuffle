'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'decks',
      [
        {
          deckName:'Brady Tarot',
          backImage:'https://i0.wp.com/littleredtarot.com/wp-content/uploads/2018/02/Brady-Tarot-Emi-Brady-Brady-Tarot-Emi-Brady-_card_back.jpg?fit=1024%2C1663&ssl=1',
          backImgInv:'https://i0.wp.com/littleredtarot.com/wp-content/uploads/2018/02/Brady-Tarot-Emi-Brady-Brady-Tarot-Emi-Brady-_card_back.jpg?fit=1024%2C1663&ssl=1',
          deckArtist:'Emi Brady',
          deckSummary:"A 78-card artist's Tarot deck inspired by the plants and animals of North America.",
          deckDetails:"Each card's art is produced by hand-colored linocuts. About this deck, the artist, Emi Brady, says: 'Making a realistic nature-themed deck about North America without considering the wisdom and insight Native people offer is just impossible and in itself a form of white-washing. Being true to the Spirit of North America was absolutely crucial to creating this deck, and Native people are inextricably entwined in that Spirit.'",
          deckLink:'https://bradytarot.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('decks', null, {})
  }
}