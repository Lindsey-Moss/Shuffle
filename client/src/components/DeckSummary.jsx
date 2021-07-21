import React from 'react'

const DeckSummary = (props) => {
  const { deck, setDeck } = props
  return (

    <div className="deck-summary-card">
      <h3 className="deck-summary-header" onClick={ () => { setDeck(deck.deckID) } }>{ deck.deckName }</h3>
      <div className="deck-summary-wrapper">
        <div className="deck-image-box"><img src={ deck.backImage } alt="" className="deck-image" onClick={ () => { setDeck(deck.deckID) } } /></div>
        <div className="deck-summary-box">
          <p>{ deck.deckSummary }</p>
          <p style={ { fontStyle: "italic" } }>Card back artist: <span style={ { fontStyle: "normal", marginLeft: "0.3em" } }>{ deck.deckArtist }</span></p>
          <details>
            <summary><span style={ { fontSize: "0.85em", letterSpacing: "0.05em" } }>Deck Details</span></summary>
            <p style={ { height: "75px", lineHeight: "125%", overflow: "auto", padding: "0 1em", fontSize: "0.85em" } }>{ deck.deckDetails }</p>
          </details>

        </div>

      </div>
    </div >

  )
}
export default DeckSummary