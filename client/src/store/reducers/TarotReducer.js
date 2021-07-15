import {
  ALL_DECKS,
  CURRENT_DECK,
  NEW_DAILY,
  NEW_READ,
  DAILY_DECK,
  RESET_READ
} from '../types'

const iState = {
  allDecks: [],
  thisDeck: null,
  thisRead: null,
  dailyDeck: null,
  theDaily: null,
  dailyCardUpright: null
}

const TarotReducer = (state = iState, action) => {
  switch (action.type) {
    case ALL_DECKS:
      return { ...state, allDecks: action.payload }
    case CURRENT_DECK:
      return { ...state, thisDeck: action.payload }
    case RESET_READ:
      return { ...state, thisDeck: null, thisRead: null }
    case DAILY_DECK:
      return { ...state, dailyDeck: action.payload }
    case NEW_DAILY:
      let draw = state.dailyDeck[Math.floor(Math.random()*state.dailyDeck.length)]
      let side = Math.round(Math.random())
      return { ...state, theDaily: draw, dailyCardUpright: side }
    case NEW_READ:
      let readDeck = state.thisDeck
      let reading = []
      for (let i=0;i<(action.payload);i++){
        let readSide = Math.round(Math.random())
        console.log(readSide)
        let pullIndex = Math.floor(Math.random()*readDeck.length)
        console.log(pullIndex)
        let pullCard = readDeck[pullIndex]
        reading.push({
          card: pullCard,
          position: readSide})
        readDeck.splice(readDeck[pullIndex],1)
        console.log(readDeck)
      }
      return { ...state, thisRead: reading }
    default:
      return { ...state }
  }
}

export default TarotReducer
