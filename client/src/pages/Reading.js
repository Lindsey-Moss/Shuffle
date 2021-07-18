import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetRead,
  LoadAllDecks,
  LoadCurrentDeck,
  ResetRead
} from '../store/actions/TarotActions'
import {
  SetReadInfo
} from '../store/actions/JournalActions'
import DeckSummary from '../components/DeckSummary'
import {
  SetFrom
} from '../store/actions/NavActions'

const mapStateToProps = ({ tarotState }) => {
  return { tarotState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRead: (number) => dispatch(GetRead(number)),
    fetchDecks: () => dispatch(LoadAllDecks()),
    setDeck: (deckID) => dispatch(LoadCurrentDeck(deckID)),
    setReadForJournal: (read)=> dispatch(SetReadInfo(read)),
    setFrom: (string) => dispatch(SetFrom(string)),
    resetRead: ()=>dispatch(ResetRead())
  }
}

const Reading = (props) => {
  const {fetchDecks} = props

  const showRead= () => {
    let reveal = document.querySelector('.read-reveal')
    reveal.style.display = 'block'
  }

  const toJournal = () => {
    let reading = props.tarotState.thisRead.map((index)=>{
      return {
        name: index.card.cardName,
        position: index.position
      }
    })
    props.setReadForJournal(reading)
    props.setFrom('reading')
    props.history.push('/journal/new')
  }

  useEffect(()=>{
    fetchDecks()
  },[])

  return (
    <div className="reading-page leave-room-for-jesus-i-mean-navbar">

      <div>{/*spacer for navbar*/}</div>

      <main className="reading-main">
      This is where you can get a reading, whenever

      {(props.tarotState.thisDeck) ? (null):(
        props.tarotState.allDecks.map((deck) => {
          return <DeckSummary deck={deck} setDeck={props.setDeck} key={deck.deckID}/>
        })
      )}

      {(props.tarotState.thisDeck &&!(props.tarotState.thisRead)) ? (
        <div>
          <h4>How many cards for this reading?
            <form>
              <input
                id="numberOfCards"
                type="number"
                min="1"
                max="12"
              />
            </form>
          </h4>
          <button className="shufflebtn" onClick={()=>{props.setRead((document.getElementById("numberOfCards").value))}}>Shuffle the Deck</button>
        </div>
        ):(null)}

      {(props.tarotState.thisRead) ? (<button onClick={()=>{showRead()}}>Show My Read</button>):(null)}

      

      {(props.tarotState.thisRead) ? (
        <div className="read-reveal">
          {props.tarotState.thisRead.map((index)=>{
            return <div className="reading-card" key={index.card.id}>
            <img src={(index.position) ? (index.card.frontImage):(index.card.frontImageInv)} alt={index.card.cardName}/>
            <h3>{index.card.cardName}{(index.position) ? (null):(<span style={{fontStyle:"italic"}}> - Inverted</span>)}</h3>
            <p>{(index.position) ? (index.card.cardUpDef) : (index.card.cardInvDef)}</p>
            </div>
          })}
          
          <button onClick={()=>{toJournal()}}>Save this draw as a journal entry?</button>
      </div>
      ):(null)}
      


      </main>
    </div>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Reading)
