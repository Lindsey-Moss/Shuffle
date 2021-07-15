import { GetAllDecks, GetCardsByDeckID} from '../../services/TarotServices'
import { 
  ALL_DECKS,
  CURRENT_DECK,
  NEW_DAILY,
  NEW_READ,
  DAILY_DECK,
  RESET_READ
} from '../types'

export const GetDaily = () => ({
  type: NEW_DAILY
})

export const GetRead = (numberOfCards) => ({
  type: NEW_READ,
  payload: parseInt(numberOfCards)
})

export const ResetRead = () => ({
  type: RESET_READ
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

export const LoadDailyDeck = (deckID) => {
  return async (dispatch) => {
    try {
      const res = await GetCardsByDeckID(deckID)
      dispatch({
        type: DAILY_DECK,
        payload: res
      })
    } catch (error) {
      throw error
    }
  }
}