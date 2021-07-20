import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  LoadAllUserEntries,
  LoadFilteredEntries,
  LoadIconEntries,
  DeleteEntryAction,
  ToggleEditEntryForm,
  EditEntryFormField,
  UpdateEntryAction
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
    deleteThis: (userID,entryID) => dispatch(DeleteEntryAction(userID,entryID)),
    toggleEdit: (entryobj)=>dispatch(ToggleEditEntryForm(entryobj)),
    setEditEntryForm: (formName, formValue) => dispatch(EditEntryFormField(formName,formValue)),
    updateThis: (userID,entryID,editForm) => dispatch(UpdateEntryAction(userID,entryID,editForm)),
    setFrom: (string) => dispatch(SetFrom(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}


const Journal = (props) => {
  const { showAllEntries, authState, getToken } = props

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  const deleteThisEntry = (userID, entryID) => {
    let userConfirm = window.confirm("Are you sure you want to delete this entry? There will be no recovering it after it is deleted it; everything you've written and the read data will all be erased permanently. Is that ok?")
    if (userConfirm){
      props.deleteThis(userID, entryID)
      window.location.assign('/journal')
    } else {alert('Ok, the entry will NOT be deleted. :)')}
  }

  const handleChange = (e) => {
    e.preventDefault()
    props.setEditEntryForm(e.target.name, e.target.value)
  }

  const updateThisEntry = (userID,entryID,editForm) => {
    props.updateThis(userID,entryID,editForm)
  }


  useEffect(() => {
    getToken()
    showAllEntries(authState.thisUser)
    checkSide()
  },[authState.isAuthenticated])



  return (
    <>
    {(authState.thisUser) ? (
      <div className="journal-page leave-room-for-jesus-i-mean-navbar">
        <div>{/*spacer for navbar*/}</div>
        
        <main className="journal-main">  
        {props.journalState.viewingEntries.map((entry)=>{
          return <Entry 
            entry={entry} 
            key={entry.id} 
            deleteThisEntry={deleteThisEntry}
            updateThisEntry={updateThisEntry}
            history={props.history} 
            userID={props.authState.thisUser} 
            toggleEdit={props.toggleEdit}
            journalState={props.journalState}
            setEditEntryForm={props.setEditEntryForm}
            handleChange={handleChange}
            />
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
