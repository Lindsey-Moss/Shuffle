'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cards',
      [
        {
          deckID: 1,
          cardName: 'The Fool',
          frontImage: 'https://i.imgur.com/HGfEAdc.jpg',
          frontImageInv: 'https://i.imgur.com/tKhBOHQ.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: 'Beginnings, innocence, spontaneity, a free spirit',
          cardInvDef:'Holding back, recklessness, risk-taking',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The High Priestess',
          frontImage: 'https://i.imgur.com/lnlTuzy.jpg',
          frontImageInv: 'https://i.imgur.com/JKiSczd.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Magician',
          frontImage: 'https://i.imgur.com/FD1hPqW.jpg',
          frontImageInv: 'https://i.imgur.com/D9tcLUa.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'Wheel of Fortune',
          frontImage: 'https://i.imgur.com/HRJYzth.jpg',
          frontImageInv: 'https://i.imgur.com/626Ya9G.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'Justice',
          frontImage: 'https://i.imgur.com/5f1gsvl.jpg',
          frontImageInv: 'https://i.imgur.com/sCaJfuB.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Empress',
          frontImage: 'https://i.imgur.com/7BeBCcb.jpg',
          frontImageInv: 'https://i.imgur.com/uMPXTdu.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Emperor',
          frontImage: 'https://i.imgur.com/mVjITRh.jpg',
          frontImageInv: 'https://i.imgur.com/VZ8ZE7A.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Hierophant',
          frontImage: 'https://i.imgur.com/7I3uD0u.jpg',
          frontImageInv: 'https://i.imgur.com/MYDgL9i.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Lovers',
          frontImage: 'https://i.imgur.com/JE0TSTw.jpg',
          frontImageInv: 'https://i.imgur.com/Cg77upC.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Chariot',
          frontImage: 'https://i.imgur.com/TXUyPUI.jpg',
          frontImageInv: 'https://i.imgur.com/DN6Eh4M.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'Strength',
          frontImage: 'https://i.imgur.com/xnLNrba.jpg',
          frontImageInv: 'https://i.imgur.com/M2pvUmZ.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
          cardDetails:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckID: 1,
          cardName: 'The Hermit',
          frontImage: 'https://i.imgur.com/G5iP8oB.jpg',
          frontImageInv: 'https://i.imgur.com/nEugJ1V.jpg',
          cardArtist: 'Emi Brady',
          cardUpDef: '',
          cardInvDef:'',
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