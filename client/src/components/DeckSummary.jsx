import React from 'react'

const DeckSummary = (props) => {
  const { deck, setDeck } = props
  return (

    <div className="deck-summary-card" onClick={ () => { setDeck(deck.deckID) } }>
      <h3 className="deck-summary-header">{ deck.deckName }</h3>
      <div className="deck-summary-box">
        <img src={ deck.backImage } alt="" />

        <p>{ deck.deckSummary }</p>
      </div>
    </div>

  )
}
export default DeckSummary