import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetDaily,
  LoadAllDecks,
  LoadDailyDeck
} from '../store/actions/TarotActions'
import {
  SetReadInfo
} from '../store/actions/JournalActions'
import DeckSummary from '../components/DeckSummary'
import {
  SetFrom,
  ToggleNav
} from '../store/actions/NavActions'

const mapStateToProps = ({ tarotState, navState }) => {
  return { tarotState, navState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDaily: () => dispatch(GetDaily()),
    fetchDecks: () => dispatch(LoadAllDecks()),
    setDeck: (deckID) => dispatch(LoadDailyDeck(deckID)),
    setReadForJournal: (read)=> dispatch(SetReadInfo(read)),
    setFrom: (string) => dispatch(SetFrom(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}

const DailyDraw = (props) => {
  const {fetchDecks} = props

  const showCard= () => {
    let reveal = document.querySelector('.daily-reveal')
    reveal.style.display = 'block'
  }

  const toJournal = () => {
    let reading = []
    reading.push({
      name: props.tarotState.theDaily.cardName,
      position: props.tarotState.dailyCardUpright
    })
    props.setReadForJournal(reading)
    props.setFrom('daily')
    props.history.push('/journal/new')
  }

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  useEffect(()=>{
    fetchDecks();
    checkSide()
  },[])

  return (
    <div className="dailydraw-page leave-room-for-jesus-i-mean-navbar">

      <div>{/*spacer for navbar*/}</div>

      <main className="dailydraw-main">
      This is where you can get your daily draw! Only once a day tho

      {(props.tarotState.dailyDeck) ? (null):(
        props.tarotState.allDecks.map((deck) => {
          return <DeckSummary deck={deck} setDeck={props.setDeck} key={deck.deckID}/>
        })
      )}

      {(props.tarotState.dailyDeck &&!(props.tarotState.theDaily)) ? (
        <button className="shufflebtn" onClick={()=>{props.setDaily()}}>Shuffle the Deck</button>
        ):(null)}

      {(props.tarotState.theDaily) ? (<button onClick={()=>{showCard()}}>Show My Card</button>):(null)}

      

      {(props.tarotState.theDaily) ? (
        <div className="daily-reveal">
        <img src={(props.tarotState.dailyCardUpright) ? (props.tarotState.theDaily.frontImage):(props.tarotState.theDaily.frontImageInv)} alt={props.tarotState.cardName}/>
        <h3>{props.tarotState.theDaily.cardName}{(props.tarotState.dailyCardUpright) ? (null):(<span style={{fontStyle:"italic"}}> - Inverted</span>)}</h3>
        <p>{props.tarotState.theDaily.cardDefinition}</p>
        <button onClick={()=>{toJournal()}}>Save this draw as a journal entry?</button>
      </div>
      ):(null)}
      


      </main>
    </div>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyDraw)
