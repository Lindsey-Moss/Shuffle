import { GetAllDecks, GetCardsByDeckID} from '../../services/TarotServices'
import { 
  ALL_DECKS,
  CURRENT_DECK,
  NEW_DAILY,
  NEW_READ
} from '../types'

export const GetDaily = () => ({
  type: NEW_DAILY
})

export const GetRead = (numberOfCards) => ({
  type: NEW_READ,
  payload: numberOfCards
})

export const LoadAllDecks = () => {
  return async (dispatch) => {
    try {
      const deckArray = await GetAllDecks()
      dispatch({
        type: ALL_DECKS,
        payload: deckArray 
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadCurrentDeck = (deckID) => {
  return async (dispatch) => {
    try {
      const res = await GetCardsByDeckID(deckID)
      dispatch({
        type: CURRENT_DECK,
        payload: res
      })
    } catch (error) {
      throw error
    }
  }
}