import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  LoadAllUserEntries,
  LoadFilteredEntries,
  LoadIconEntries
} from '../store/actions/JournalActions'
import Entry from '../components/Entry'


const mapStateToProps = ({ journalState, authState }) => {
  return { journalState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAllEntries: (userID) => dispatch(LoadAllUserEntries(userID)),
    showFilteredEntries: (userID,string) => dispatch(LoadFilteredEntries(userID,string)),
    showIconEntries: (userID,icon) => dispatch(LoadIconEntries(userID,icon))
  }
}


const Journal = (props) => {
  const { showAllEntries, authState, getToken } = props

  useEffect(() => {
    getToken()
    showAllEntries(authState.thisUser)
  }, [])

  return (

    <div className="journal-page leave-room-for-jesus-i-mean-navbar">
      <div>{/*spacer for navbar*/}</div>
      <main>
      This is where journal entries will be displayed

      {props.journalState.viewingEntries.map((entry)=>{
        return <Entry entry={entry} key={entry.id}/>
      })}

      </main>

    </div>

  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Journal)
