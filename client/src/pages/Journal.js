import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  LoadAllUserEntries,
  LoadFilteredEntries,
  LoadIconEntries
} from '../store/actions/JournalActions'
import {
  SetFrom
} from '../store/actions/NavActions'
import Entry from '../components/Entry'
import Unauthenticated from '../components/Unauthenticated'


const mapStateToProps = ({ journalState, authState }) => {
  return { journalState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAllEntries: (userID) => dispatch(LoadAllUserEntries(userID)),
    showFilteredEntries: (userID,string) => dispatch(LoadFilteredEntries(userID,string)),
    showIconEntries: (userID,icon) => dispatch(LoadIconEntries(userID,icon)),
    setFrom: (string) => dispatch(SetFrom(string))
  }
}


const Journal = (props) => {
  const { showAllEntries, authState, getToken } = props

  useEffect(() => {
    getToken();
    showAllEntries(authState.thisUser)
  },[])

  return (
    <>
    {(authState.thisUser) ? (
      <div className="journal-page leave-room-for-jesus-i-mean-navbar">
        <div>{/*spacer for navbar*/}</div>
        <main>
        This is where journal entries will be displayed
  
        {props.journalState.viewingEntries.map((entry)=>{
          return <Entry entry={entry} key={entry.id}/>
        })}
  
        </main>
  
      </div>

    ):(
      <Unauthenticated setFrom={props.setFrom} redirect='journal' />

    )}
      </>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Journal)
