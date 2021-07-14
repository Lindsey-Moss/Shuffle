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

  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        onClick={ () => { { props.history.push('/'); checkPathForAuth(); checkPathForProfile() } } }
        src="https://freesvg.org/img/Placeholder.png"
        alt="this is where i'd put a logo... if i had one!" />
      { (props.authState.isAuthenticated) ? (
        <>
          { onProfile ? (null) : (
            <button onClick={ () => { { props.history.push('/profile'); checkPathForProfile() } } }>Profile</button>
          ) }
          <button onClick={ props.logOut }>Log Out</button>
        </>
      ) : (
        <>
          { onAuth ? (null) : (
            <>
              <button onClick={ () => { { props.history.push('/auth/query'); checkPathForAuth() } } }>
                Log In
              </button>
              <button onClick={ () => { { props.history.push('/auth?'); checkPathForAuth() } } }>
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
