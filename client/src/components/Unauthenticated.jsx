import React from 'react'

const Unauthenticated = (props) => {
  const { setFrom, history, redirect } = props

  const toLogin = () => {
    setFrom(redirect)
    history.push('/auth/query')
  }

  const toSignup = () => {
    setFrom(redirect)
    history.push('/auth')
  }

  const closeSide = () => {
    let aside = document.querySelector('.navbar')
    let spacer = document.querySelector('.leave-room-for-jesus-i-mean-navbar')
    spacer.style.gridTemplateColumns = '50px 1fr'
    aside.style.width = 0;
    aside.style.opacity = 0;
    aside.style.zIndex = -999
  }


  return (
    <div className="sorry-popup leave-room-for-jesus-i-mean-navbar">
      { closeSide() }
      <div>{/*spacer for navbar*/ }</div>
      <div className="sorry-center">
        <h3>Sorry, I can't find a journal for you!</h3>
        <h5>Do you want to sign up or log in so you can save your readings and journal entries?</h5>
        <button onClick={ toLogin }>Log In</button> <button onClick={ toSignup }>Sign Up</button>
      </div>
    </div>
  )
}
export default Unauthenticated
