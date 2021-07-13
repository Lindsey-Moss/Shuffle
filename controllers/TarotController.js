const { Card, Deck } = require('../models')

const GetAllDecks = async (req, res) => {
  try {
    let decklist = await Deck.findAll()
    res.send(decklist)
  } catch (error) {
    throw error
  }
}

const GetCardsByDeckID = async (req, res) => {
  try {
    let deckID = req.params.deckID
    let cardlist = await Card.findAll({
      where: { deckID: deckID }
    })
    res.send(cardlist)
  } catch (error) {
    throw error
  }
}



  module.exports = {
    GetAllDecks,
    GetCardsByDeckID
  }