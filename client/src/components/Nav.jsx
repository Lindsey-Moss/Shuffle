import React, { useState } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Nav = (props) => {
  //// LOCAL STATE ////
  const [onAuth, setAuth] = useState(null)
  const [onProfile, setProfile] = useState(null)
  ////

  const checkPathForAuth = () => {
    ((window.location.pathname).includes('auth')) ? (setAuth(true)) : (setAuth(false))
  }

  const checkPathForProfile = () => {
    ((window.location.pathname).includes('profile')) ? (setProfile(true)) : (setProfile(false))
  }

  const closeSide = () => {
    let aside = document.querySelector('.navbar')
    let spacer = document.querySelector('.leave-room-for-jesus-i-mean-navbar')
    spacer.style.gridTemplateColumns = '0 1fr'
    aside.style.width = 0;
    aside.style.opacity = 0;
    aside.style.zIndex = -999
  }

  return (
    <div className="navbar">
      <button className="closebtn" onClick={ () => { closeSide() } }>&times;</button>
      <img
        className="navbar-logo"
        onClick={ () => { { props.history.push('/'); checkPathForAuth(); checkPathForProfile() } } }
        src="https://freesvg.org/img/Placeholder.png"
        alt="this is where i'd put a logo... if i had one!" />

      <button
        className="navbar-btn"
        onClick={ () => { { props.history.push('/reading'); checkPathForAuth(); checkPathForProfile() } } }
      >
        Reading
      </button>

      { (props.authState.isAuthenticated) ? (
        <>
          { onProfile ? (null) : (
            <button className="navbar-btn" onClick={ () => { { props.history.push('/profile'); checkPathForProfile() } } }>Profile</button>
          ) }
          <button className="navbar-btn" onClick={ () => { { props.history.push('/journal'); checkPathForAuth(); checkPathForProfile() } } }>Journal</button>
          <button className="navbar-btn" onClick={ () => { { props.history.push('/journal/new'); checkPathForAuth(); checkPathForProfile() } } }>Write a New Entry</button>
          <button className="navbar-btn" onClick={ props.logOut }> Log Out </button>
        </>
      ) : (
        <>
          { onAuth ? (null) : (
            <>
              <button
                className="navbar-btn"
                onClick={ () => { { props.history.push('/auth/query'); checkPathForAuth() } } }>
                Log In
              </button>
              <button
                className="navbar-btn"
                onClick={ () => { { props.history.push('/auth?'); checkPathForAuth() } } }>
                Sign Up
              </button>
            </>
          ) }
        </>
      ) }
    </div>
  )
}
export default connect(mapStateToProps)(Nav)
