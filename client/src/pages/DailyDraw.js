import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetDaily,
  LoadAllDecks,
  LoadDailyDeck
} from '../store/actions/TarotActions'
import {
  SetReadInfo,
  AutoSaveDailyEntry
} from '../store/actions/JournalActions'
import DeckSummary from '../components/DeckSummary'
import {
  SetFrom,
  ToggleNav
} from '../store/actions/NavActions'
import {
  
} from '../store/actions/JournalActions'

const mapStateToProps = ({ tarotState, navState, authState }) => {
  return { tarotState, navState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDaily: () => dispatch(GetDaily()),
    fetchDecks: () => dispatch(LoadAllDecks()),
    setDeck: (deckID) => dispatch(LoadDailyDeck(deckID)),
    setReadForJournal: (read)=> dispatch(SetReadInfo(read)),
    setFrom: (string) => dispatch(SetFrom(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool)),
    autosaveDaily: (userID,entry) => dispatch(AutoSaveDailyEntry(userID,entry))
  }
}

const DailyDraw = (props) => {
  const {fetchDecks} = props

  const showCard = async () => {
    let reveal = document.querySelector('.daily-reveal')
    let thisButton = document.querySelector('.show-reading-btn')
    reveal.style.display = 'flex'
    thisButton.style.display = 'none'
    if(props.authState.thisUser){
      let reading = props.tarotState.theDaily.cardName
      if(!props.tarotState.dailyCardUpright){
        reading+=' - Inverted'
      }
      try{
        await props.autosaveDaily(props.authState.thisUser,{
        userID: props.authState.thisUser,
        read: [reading],
        entryTitle: 'Daily Draw',
        entryBody: '',
        entryIcon: 'ddd',
        inJournal: 0
      })
    } catch (error) {
      console.log('Autosave failed.',error)
    }
    }
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

      {(props.tarotState.dailyDeck) ? (null):(
        
        <div className="deck-options">
          <h1>Which deck would you like for your drawing today?</h1>
          {props.tarotState.allDecks.map((deck) => {
          return <DeckSummary deck={deck} setDeck={props.setDeck} key={deck.deckID}/>
        })}

        </div>
      )}

      {(props.tarotState.dailyDeck &&!(props.tarotState.theDaily)) ? (
        <button className="shufflebtn" style={{position:"fixed",top:"40%"}} onClick={()=>{props.setDaily()}}>Shuffle the Deck</button>
        ):(null)}

      {(props.tarotState.theDaily) ? (<button className="show-reading-btn" onClick={()=>{showCard()}}>Show My Card</button>):(null)}

      

      {(props.tarotState.theDaily) ? (
        <div className="daily-reveal">
          <div className="daily-card">
            <img src={(props.tarotState.dailyCardUpright) ? (props.tarotState.theDaily.frontImage):(props.tarotState.theDaily.frontImageInv)} alt={props.tarotState.cardName}/>
            <h3>{props.tarotState.theDaily.cardName}{(props.tarotState.dailyCardUpright) ? (null):(<span style={{fontStyle:"italic"}}> - Inverted</span>)}</h3>
            <p>{(props.tarotState.dailyCardUpright) ? (props.tarotState.theDaily.cardUpDef) : (props.tarotState.theDaily.cardInvDef)}</p>
          </div>
          <div className="save-as-entry-button-box">
            <button onClick={()=>{toJournal()}}>Save this draw as a journal entry</button>
          </div>
      </div>
      ):(null)}
      


      </main>
    </div>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyDraw)
