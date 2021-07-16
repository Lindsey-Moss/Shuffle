import React from 'react'


const Entry = (props) => {
  console.log(props.entry)
  return (

    <div className="entry-card">

      <h3><img src={ props.entry.entryIcon } alt={ props.entry.entryIcon } />{ props.entry.entryTitle }</h3>
      { props.entry.read ? (<ul>{ props.entry.read.map((card) => {
        return <li>{ card }</li>
      }) }</ul>) : (null) }
      <p>{ props.entry.entryBody }</p>

    </div>

  )
}
export default Entry
