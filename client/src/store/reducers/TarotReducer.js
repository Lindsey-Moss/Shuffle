import {
  ALL_DECKS,
  CURRENT_DECK,
  NEW_DAILY,
  NEW_READ
} from '../types'

const iState = {
  allDecks: [],
  thisDeck: null,
  thisRead: null,
  theDaily: null,
  dailyCardUpright: null
}

const TarotReducer = (state = iState, action) => {
  switch (action.type) {
    case ALL_DECKS:
      return { ...state, allDecks: action.payload }
    case CURRENT_DECK:
      return { ...state, thisDeck: action.payload }
    case NEW_DAILY:
      let draw = state.thisDeck[Math.floor(Math.random()*state.thisDeck.length)]
      let side = Math.round(Math.random())
      return { ...state, theDaily: draw, dailyCardUpright: side }
    case NEW_READ:
      let readDeck = state.thisDeck
      let reading = []
      for (let i=0;i<action.payload;i++){
        let pullCard = {}
        let pullIndex = Math.floor(Math.random()*readDeck.length)
        pullCard = readDeck[pullIndex]
        reading.push(pullCard)
        readDeck.splice(readDeck[pullIndex],1)
      }
      return { ...state, thisRead: reading }
    default:
      return { ...state }
  }
}

export default TarotReducer
