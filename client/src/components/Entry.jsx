import React from 'react'


const Entry = (props) => {

  const changeDate = (ISOdate) => {
    if (ISOdate) {
      let dateParts = ISOdate.split("-");
      let newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2))
      let dateWithoutTime = ((newDate.getMonth() + 1) + '.' + (newDate.getDate()) + '.' + newDate.getFullYear())
      return dateWithoutTime;
    } else { return '' }
  }

  const handleSubmitUpdate = async (e) => {
    e.preventDefault()
    await props.updateThisEntry(props.userID, props.entry.id, {
      read: props.journalState.editingEntry.read,
      entryTitle: props.journalState.editingEntry.entryTitle,
      entryBody: props.journalState.editingEntry.entryBody,
      entryIcon: props.journalState.editingEntry.entryIcon
    })
    window.location.assign('/journal')
  }

  return (

    <div className="entry-card">
      <h4>{ changeDate(props.entry.createdAt) }</h4>
      <div className="entry-card-button-box">
        { (props.journalState.editing && (props.journalState.editingEntry.id === props.entry.id)) ? (
          <>
            <button
              onClick={ () => { props.deleteThisEntry(props.userID, props.entry.id) } }
              className="delete-entry-btn">
              <img src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png" alt="Delete Entry" width="20" />
            </button>
            <button
              onClick={ () => { props.toggleEdit(props.entry) } }
              className="edit-entry-btn">
              <img src="http://cdn.onlinewebfonts.com/svg/img_557136.png" alt="Toggle Editing This Entry" width="20" />
            </button>
          </>) : (null) }
        { ((!props.journalState.editing) ? (<button
          onClick={ () => { props.toggleEdit(props.entry) } }
          className="edit-entry-btn">
          <img src="http://cdn.onlinewebfonts.com/svg/img_557136.png" alt="Toggle Editing This Entry" width="20" />
        </button>) : (null)) }

      </div>
      { (props.journalState.editing && (props.journalState.editingEntry.id === props.entry.id)) ? (
        <form className="edit-entry-form">
          { (props.entry.read ? (<input
            type="text"
            name="read"
            value={ props.journalState.editingEntry.read }
            readOnly
          />) : (null)) }
          <input
            type="text"
            name="entryTitle"
            value={ props.journalState.editingEntry.entryTitle }
            onChange={ props.handleChange }
          />
          <textarea
            rows="20"
            name="entryBody"
            value={ props.journalState.editingEntry.entryBody }
            onChange={ props.handleChange }
          />
          <select
            name="entryIcon"
            defaultValue={ props.journalState.editingEntry.entryIcon }
            onChange={ props.handleChange }
          >
            <option></option>
            <option value="aaa">A</option>
            <option value="bbb">B</option>
            <option value="ccc">C</option>
          </select>
          <button onClick={ handleSubmitUpdate }>Submit Edits</button>
        </form>
      ) : (
        <>
          <h3><img src={ props.entry.entryIcon } alt="" />{ props.entry.entryTitle }</h3>

          { (props.entry.read && (props.entry.read[0] !== '')) ? (
            <div className="entry-read-box" style={ { gridTemplateColumns: ((props.entry.read.length <= 3) ? ("50px 50%") : ("100px 50%")), gridTemplateRows: ((props.entry.read.length <= 3) ? ("65px") : ("100px")) } }>
              <img src="https://i.imgur.com/XpKaRlW.png" className="" style={ { height: ((props.entry.read.length <= 3) ? ("60px") : ("")) } } />
              <ul className="entry-read-list">{ props.entry.read.map((card, index) => {
                return <li className="entry-read-card" key={ index }>{ card.replace('- inverted', '↕') } </li>
              }) }</ul>
            </div>
          ) : (
            null /* if there is no read info to show, then don't */
          ) }
          <p>{ props.entry.entryBody }</p>
        </>) }
    </div>

  )
}
export default Entry
