const Router = require('express').Router()
const controller = require('../controllers/TarotController')

Router.get('/', controller.GetAllDecks)
Router.get('/deck/:deckID', controller.GetCardsByDeckID)


module.exports = Router
