import React from 'react'
import { connect } from 'react-redux'
import {
  EntryFormField,
  PostNewEntryAction
} from '../store/actions/JournalActions'

const mapStateToProps = ({ journalState }) => {
  return { journalState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEntryForm: (formName, formValue) => dispatch(EntryFormField(formName,formValue)),
    submitEntry: (userID, entryForm) => dispatch(PostNewEntryAction(userID,entryForm))
  }
}

const NewEntry = (props) => {
  let legible = ''
  props.journalState.read.forEach((index)=>{
    legible+= `${index.name}, `
  })

  const handleChange = (e) => {
    props.setEntryForm(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const entryForm = {
      read: props.journalState.read,
      entryTitle: props.journalState.entryTitle,
      entryBody: props.journalState.entryBody,
      entryIcon: props.journalState.entryIcon
    }
    try {
      await props.submitEntry(entryForm)
    } catch (error) {
      return alert('The entry failed to save. Please wait a moment and try again.')
    }
  }

console.log(props.journalState.read)

  return (

    <div className="newentry-page leave-room-for-jesus-i-mean-navbar">
      <div>{/*spacer for navbar*/}</div>
      <main>
      This is where you can make a new journal entry
      <div className="newentry-form-wrapper">
        <form className="newentry-form">
          <input
            type="text"
            name="read"
            value={legible}
            readonly
          />
          <input
            type="text"
            name="entryTitle"
            value={props.journalState.entryTitle}
            onChange={handleChange}
            placeholder="entry title"
          />
          <input
          />
          <input
          />
        </form>
      </div>
      </main>
    </div>

  )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)
