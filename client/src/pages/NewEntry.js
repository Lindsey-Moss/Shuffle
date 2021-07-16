import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Unauthenticated from '../components/Unauthenticated'
import {
  EntryFormField,
  PostNewEntryAction,
  SetEntryTitle
} from '../store/actions/JournalActions'
import { 
  SetFrom,
  ToggleNav 
} from '../store/actions/NavActions'

const mapStateToProps = ({ journalState, authState, navState }) => {
  return { journalState, authState, navState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    entryTitleAutopop: (string) => dispatch(SetEntryTitle(string)),
    setEntryForm: (formName, formValue) => dispatch(EntryFormField(formName,formValue)),
    submitEntry: (userID, entryForm) => dispatch(PostNewEntryAction(userID,entryForm)),
    setFrom: (string) => dispatch(SetFrom(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}

////


const NewEntry = (props) => {

  let legible = null

  const checkRead = () => {
    props.journalState.read.map((index)=>{
      if(index.position){
        return legible += `${index.name}, `
      }else{
        return legible+= `${index.name} - inverted, `
      }})
      return legible= legible.substring(4,(legible.length-2))
  }

  const checkFrom = () => {
    switch (props.navState.from){
      case 'daily':
        return props.entryTitleAutopop(`Daily Draw`)
      default:
        return null
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    props.setEntryForm(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const entryForm = {
      userID: props.authState.thisUser,
      read: legible.split(', '),
      entryTitle: props.journalState.entryTitle,
      entryBody: props.journalState.entryBody,
      entryIcon: props.journalState.entryIcon,
      inJournal: 1
    }
    try {
      await props.submitEntry(props.authState.thisUser,entryForm)
      return props.history.push('/journal')
    } catch (error) {
      return alert('The entry failed to save. Please wait a moment and try again.')
    }
  }

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  useEffect(()=>{
    props.getToken();
    checkFrom();
    checkSide()
  },[])

////

  return (
    <>
    {props.authState.isAuthenticated ? (
      <div className="newentry-page leave-room-for-jesus-i-mean-navbar">
        <div>{/*spacer for navbar*/}</div>
        <main>
        This is where you can make a new journal entry
        <div className="newentry-form-wrapper">
          <form className="newentry-form">
            {(props.journalState.read && (props.navState.from !=='nav')) ? (
              <input
                type="text"
                name="read"
                value={checkRead()}
                readOnly
              />):(
                null
              )}
            <input
              type="text"
              name="entryTitle"
              value={props.journalState.entryTitle}
              onChange={handleChange}
              placeholder="entry title"
            />
            <textarea
            cols="50"
            rows="20"
            name="entryBody"
            value={props.journalState.entryBody}
            onChange={handleChange}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit donec..."
            />
            <select name="entryIcon"
              defaultValue=''
            >
              <option></option>
              <option value="aaa">A</option>
              <option value="bbb">B</option>
              <option value="ccc">C</option>
            </select>
            <button onClick={handleSubmit}>Save Entry</button>
          </form>
        </div>
        </main>
      </div>

    ):(
      <Unauthenticated history={props.history} setFrom={props.setFrom} redirect='newentry' />
    )}
    </>

  )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)
