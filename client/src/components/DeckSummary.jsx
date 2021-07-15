import React from 'react'

const DeckSummary = (props) => {
  const { deck, setDeck } = props
  return (

    <div className="deck-summary-card" key={ deck.deckID } onClick={ () => { setDeck(deck.deckID) } }>
      <h3>{ deck.deckName }</h3>
      <img src={ deck.backImage } alt="" width="200" />
      <p>{ deck.deckDetails }</p>
    </div>

  )
}
export default DeckSummary