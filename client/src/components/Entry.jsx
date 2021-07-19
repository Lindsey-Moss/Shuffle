import React from 'react'


const Entry = (props) => {

  const changeDate = (ISOdate) => {
    let dateParts = ISOdate.split("-");
    let newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2))
    let dateWithoutTime = ((newDate.getMonth() + 1) + '.' + (newDate.getDate()) + '.' + newDate.getFullYear())
    return dateWithoutTime;
  }

  return (

    <div className="entry-card">
      <button
        onClick={ () => { props.deleteThisEntry(props.authState.thisUser, props.entry.id) } }
        className="delete-entry-btn">
        <img src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png" width="20" />
      </button>
      <h3><img src={ props.entry.entryIcon } alt={ props.entry.entryIcon } />{ props.entry.entryTitle }</h3>
      { (props.entry.read && (props.entry.read[0] !== '')) ? (<ul>{ props.entry.read.map((card, index) => {
        return <li key={ index }>{ card }</li>
      }) }</ul>) : (null) }
      <p> { changeDate(props.entry.createdAt) } </p>
      <p>{ props.entry.entryBody }</p>

    </div>

  )
}
export default Entry
