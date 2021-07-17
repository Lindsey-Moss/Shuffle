import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  LoadAllUserEntries,
  LoadFilteredEntries,
  LoadIconEntries
} from '../store/actions/JournalActions'
import {
  SetFrom,
  ToggleNav
} from '../store/actions/NavActions'
import Entry from '../components/Entry'
import Unauthenticated from '../components/Unauthenticated'


const mapStateToProps = ({ journalState, authState, navState }) => {
  return { journalState, authState, navState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAllEntries: (userID) => dispatch(LoadAllUserEntries(userID)),
    showFilteredEntries: (userID,string) => dispatch(LoadFilteredEntries(userID,string)),
    showIconEntries: (userID,icon) => dispatch(LoadIconEntries(userID,icon)),
    setFrom: (string) => dispatch(SetFrom(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}


const Journal = (props) => {
  const { showAllEntries, authState, getToken } = props

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  useEffect(() => {
    getToken();
    showAllEntries(authState.thisUser);
    checkSide()
  },[])

  return (
    <>
    {(authState.thisUser) ? (
      <div className="journal-page leave-room-for-jesus-i-mean-navbar">
        <div>{/*spacer for navbar*/}</div>
        
        <main className="journal-main">  
        {props.journalState.viewingEntries.map((entry)=>{
          return <Entry entry={entry} key={entry.id}/>
        })}
  
        </main>
  
      </div>

    ):(
      <Unauthenticated history={props.history} setFrom={props.setFrom} redirect='journal' />

    )}
      </>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Journal)
