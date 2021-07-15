import API from '.'

export const GetAllDecks = async () => {
  try {
    const res = await API.get('tarot')
    return res.data   
  } catch (error) {
    throw error
  }
}

export const GetCardsByDeckID = async (deckID) => {
  try {
    const res = await API.get(`tarot/deck/${deckID}`)
    return res.data
  } catch (error) {
    throw error
  }
}