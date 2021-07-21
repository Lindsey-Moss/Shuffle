import React from 'react'
import { connect } from 'react-redux'
import {
  SetFrom,
  CheckPath,
  ToggleNav
} from '../store/actions/NavActions'
import logo from '../styles/shuffle-logo-white.png'

const mapStateToProps = ({ authState, navState }) => {
  return { authState, navState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFrom: (string) => dispatch(SetFrom(string)),
    setPath: (string) => dispatch(CheckPath(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}

const Nav = (props) => {

  const checkPath = () => {
    if (window.location.pathname.includes('auth')) {
      return props.setPath('auth')
    } else if (window.location.pathname.includes('profile')) {
      return props.setPath('profile')
    } else {
      return props.setPath('')
    }
  }

  const closeSide = () => {
    props.navState.navOpen ? (props.toggleNav(false)) : (props.toggleNav(false))
  }

  return (
    <div className="navbar">
      <button className="closebtn" onClick={ () => { closeSide() } }>&#10235;</button>
      <img className="navbar-logo"
        onClick={ () => { props.history.push('/'); checkPath() } }
        src={ logo }
        alt="Shuffle" />

      <div className="navbar-btn"
        onClick={ () => { props.history.push('/reading'); checkPath() } }
      >
        Reading
      </div>

      { (props.authState.isAuthenticated) ? (
        <>
          { (props.navState.on === 'profile') ? (null) : (<div className="navbar-btn" onClick={ () => { props.history.push('/profile'); checkPath() } }>Profile</div>) }
          <div className="navbar-btn" onClick={ () => { props.history.push('/journal'); checkPath() } }>Journal</div>
          <div className="navbar-btn" onClick={ () => { props.setFrom('nav'); props.history.push('/journal/new'); checkPath() } }>New Entry</div>
          <div className="navbar-btn logout" onClick={ () => { props.logOut() } }> Log Out </div>
        </>
      ) : (
        <>
          { (props.navState.on === 'auth') ? (null) : (
            <>
              <button className="navbar-btn"
                onClick={ () => { props.history.push('/auth/query'); checkPath() } }>
                Log In
              </button>
              <button className="navbar-btn"
                onClick={ () => { props.history.push('/auth'); checkPath() } }>
                Sign Up
              </button>
            </>
          ) }
        </>
      ) }
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
