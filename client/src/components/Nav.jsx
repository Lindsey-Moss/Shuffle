import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Nav = (props) => {
  //// LOCAL STATE ////
  const [path, setPath] = useState(null)
  ////

  const checkPath = () => {
    if ((window.location.pathname).includes('auth')) {
      return setPath(true)
    } else {
      return setPath(false)
    }
  }

  useEffect(() => {
    props.getToken()
  }, [])

  console.log(window.location.pathname)

  return (
    <div className="navbar">
      This is the navbar
      { (props.authState.isAuthenticated) ? (
        <>
          <button onClick={ () => { props.history.push('/profile') } }>Profile</button>
          <button onClick={ props.logOut }>Log Out</button>
        </>
      ) : (
        <>
          { path ? (null) : (
            <>
              <button onClick={ () => { { props.history.push('/auth/query'); checkPath() } } }>
                Log In
              </button>
              <button onClick={ () => { { props.history.push('/auth?'); checkPath() } } }>
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
