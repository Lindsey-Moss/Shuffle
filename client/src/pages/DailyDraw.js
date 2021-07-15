import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetDaily,
  LoadAllDecks,
  LoadCurrentDeck
} from '../store/actions/TarotActions'
import {
  SetReadInfo
} from '../store/actions/JournalActions'
import DeckSummary from '../components/DeckSummary'

const mapStateToProps = ({ tarotState }) => {
  return { tarotState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDaily: () => dispatch(GetDaily()),
    fetchDecks: () => dispatch(LoadAllDecks()),
    setDeck: (deckID) => dispatch(LoadCurrentDeck(deckID)),
    setReadForJournal: (read)=> dispatch(SetReadInfo(read))
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
      position: props.tarotState.theDaily.dailyCardUpright
    })
    props.setReadForJournal(reading)
    props.history.push('/journal/new')
  }

  useEffect(()=>{
    fetchDecks()
  },[])

  console.log(props.tarotState)
  return (
    <div className="dailydraw-page leave-room-for-jesus-i-mean-navbar">

      <div>{/*spacer for navbar*/}</div>

      <main className="dailydraw-main">
      This is where you can get your daily draw! Only once a day tho

      {(props.tarotState.thisDeck) ? (null):(
        props.tarotState.allDecks.map((deck) => {
          return <DeckSummary deck={deck} setDeck={props.setDeck} />
        })
      )}

      {(props.tarotState.thisDeck &&!(props.tarotState.theDaily)) ? (
        <button className="shufflebtn" onClick={()=>{props.setDaily()}}>Shuffle the Deck</button>
        ):(<button onClick={()=>{showCard()}}>Show My Card</button>)}



      

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
