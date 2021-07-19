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
          deckSummary:"Thoughtfully created by a local Denver artist, this tarot deck was inspired by the plants and animals of North America.",
          deckDetails:"The art of each card in the Brady Tarot deck was produced by hand-colored linocuts. About this deck, the artist, Emi Brady, says: 'Making a realistic nature-themed deck about North America without considering the wisdom and insight Native people offer is just impossible and in itself a form of white-washing. Being true to the Spirit of North America was absolutely crucial to creating this deck, and Native people are inextricably entwined in that Spirit.'",
          deckLink:'https://bradytarot.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckName:'Lady Tarot',
          backImage:'https://i.imgur.com/lbf3w8S.png',
          backImgInv:'https://i.imgur.com/lbf3w8S.png',
          deckArtist:'hattersarts',
          deckSummary:"An LGBT, nonbinary, POC, and trans-inclusive tarot deck by 44 artists, this deck has it all: lady knights, lesbian lovers, and non-binary queens.  (A majority of cards show some amount of artistic nudity.)",
          deckDetails:"The Lady Tarot Cards deck was a collaborative project by LGBT women and nonbinary artists <i>for</i> LGBT women and nonbinary people— trans and POC inclusive. Kickstarted in 2020 with great success, the deck was the brainchild of Nova and Mali in partnership with 44 artists. ‘It was absolutely crucial to us to make this deck trans and POC inclusive - we weren’t making this if we couldn’t achieve that goal.’",
          deckLink:'https://ladytarotcards.storenvy.com/',
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