import React from 'react'
import { connect } from 'react-redux'
import {
  EntryFormField,
  PostNewEntryAction
} from '../store/actions/JournalActions'

const mapStateToProps = ({ journalState, authState }) => {
  return { journalState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEntryForm: (formName, formValue) => dispatch(EntryFormField(formName,formValue)),
    submitEntry: (userID, entryForm) => dispatch(PostNewEntryAction(userID,entryForm))
  }
}

////


const NewEntry = (props) => {
  let legible = ''
  {
    if(props.journalState.read){
      props.journalState.read.forEach((index)=>{
        legible+= `${index.name}, `
      })
    }else{}}

  const handleChange = (e) => {
    e.preventDefault()
    props.setEntryForm(e.target.name, e.target.value)
    console.log(props.journalState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const entryForm = {
      userID: props.authState.thisUser,
      read: legible,
      entryTitle: props.journalState.entryTitle,
      entryBody: props.journalState.entryBody,
      entryIcon: props.journalState.entryIcon,
      inJournal: 1
    }
    console.log(entryForm)
    try {
      await props.submitEntry(props.authState.thisUser,entryForm)
    } catch (error) {
      return alert('The entry failed to save. Please wait a moment and try again.')
    }
  }

// console.log(props.journalState.read)

////

  return (

    <div className="newentry-page leave-room-for-jesus-i-mean-navbar">
      <div>{/*spacer for navbar*/}</div>
      <main>
      This is where you can make a new journal entry
      <div className="newentry-form-wrapper">
        <form className="newentry-form">
          {(props.journalState.read) ? (<input
            type="text"
            name="read"
            value={legible}
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

  )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)
