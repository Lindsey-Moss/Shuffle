'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cards',
      [
        {
          deckID: 2,
          cardName: 'The Fool',
          frontImage: 'https://i.imgur.com/HGfEAdc.jpg',
          frontImageInv: 'https://i.imgur.com/tKhBOHQ.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Beginnings, innocence, spontaneity, a free spirit

          REVERSED: Holding back, recklessness, risk-taking`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The High Priestess',
          frontImage: 'https://i.imgur.com/lnlTuzy.jpg',
          frontImageInv: 'https://i.imgur.com/JKiSczd.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Intuition, sacred knowledge, divine feminine, the subconscious mind

          REVERSED: Secrets, disconnected from intuition, withdrawal and silence`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Magician',
          frontImage: 'https://i.imgur.com/FD1hPqW.jpg',
          frontImageInv: 'https://i.imgur.com/D9tcLUa.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Manifestation, resourcefulness, power, inspired action

          REVERSED: Manipulation, poor planning, untapped talents`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'Wheel of Fortune',
          frontImage: 'https://i.imgur.com/HRJYzth.jpg',
          frontImageInv: 'https://i.imgur.com/626Ya9G.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Good luck, karma, life cycles, destiny, a turning point

          REVERSED: Bad luck, resistance to change, breaking cycles`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'Justice',
          frontImage: 'https://i.imgur.com/5f1gsvl.jpg',
          frontImageInv: 'https://i.imgur.com/sCaJfuB.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Justice, fairness, truth, cause and effect, law

          REVERSED: Unfairness, lack of accountability, dishonesty`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Empress',
          frontImage: 'https://i.imgur.com/7BeBCcb.jpg',
          frontImageInv: 'https://i.imgur.com/uMPXTdu.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Femininity, beauty, nature, nurturing, abundance

          REVERSED: Creative block, dependence on others`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Emperor',
          frontImage: 'https://i.imgur.com/mVjITRh.jpg',
          frontImageInv: 'https://i.imgur.com/VZ8ZE7A.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Authority, establishment, structure, a father figure

          REVERSED: Domination, excessive control, lack of discipline, inflexibility`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Hierophant',
          frontImage: 'https://i.imgur.com/7I3uD0u.jpg',
          frontImageInv: 'https://i.imgur.com/MYDgL9i.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Spiritual wisdom, religious beliefs, conformity, tradition,institutions

          REVERSED: Personal beliefs, freedom, challenging the status quo`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Lovers',
          frontImage: 'https://i.imgur.com/JE0TSTw.jpg',
          frontImageInv: 'https://i.imgur.com/Cg77upC.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Love, harmony, relationships, values alignment, choices

          REVERSED: Self-love, disharmony, imbalance, misalignment of values`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Chariot',
          frontImage: 'https://i.imgur.com/TXUyPUI.jpg',
          frontImageInv: 'https://i.imgur.com/DN6Eh4M.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Control, willpower, success, action, determination

          REVERSED: Self-discipline, opposition, lack of direction`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'Strength',
          frontImage: 'https://i.imgur.com/xnLNrba.jpg',
          frontImageInv: 'https://i.imgur.com/M2pvUmZ.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Strength, courage, persuasion, influence, compassion

          REVERSED: Inner strength, self-doubt, low energy, raw emotion`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 2,
          cardName: 'The Hermit',
          frontImage: 'https://i.imgur.com/G5iP8oB.jpg',
          frontImageInv: 'https://i.imgur.com/nEugJ1V.jpg',
          cardArtist: 'Emi Brady',
          cardDefinition: `UPRIGHT: Soul-searching, introspection, being alone, inner guidance

          REVERSED: Isolation, loneliness, withdrawal`,
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {})
  }
}