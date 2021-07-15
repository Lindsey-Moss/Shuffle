import React, { useState, useEffect } from 'react'
import {connect } from 'react-redux'
import {
  SignIn, 
  AuthFormField,
  Register
} from '../store/actions/AuthActions'

const mapStateToProps = ({authState, navState}) => {
  return {authState, navState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthForm: (formName, formValue) => dispatch(AuthFormField(formName, formValue)),
    setLogin: (authForm) => dispatch(SignIn(authForm)), 
    setRegister: (authForm) => dispatch(Register(authForm))
  }
}

const Auth = (props) => {
  
  const checkPath = () => {
    if ((window.location.pathname).replace('/auth','') === '/query') {
      return false
    } else {
      return true
    }
  }
//// LOCAL STATE ////
  const [isRegister, setForm] = useState(checkPath())
  const [zodiacChoice, setChoice] = useState(null)
////

  const handleChange = (e) => {
    props.setAuthForm(e.target.name, e.target.value)
  }

  const handleOptionChange = (e) => {
    setChoice(e.target.value)
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    const authForm = {
      userName: props.authState.userName,
      password: props.authState.password
    }
    try {
      await props.setLogin(authForm)
      window.location.assign('/')
    } catch (error) {
      return alert('Your username or password is incorrect')
    }
  }

  const handleSubmitRegister=(e) => {
    e.preventDefault()
    props.setRegister({
      email: props.authState.email,
      userName: props.authState.userName, 
      preferredName: props.authState.preferredName, 
      password: props.authState.password,
      zipCode: props.authState.zipCode,
      zodiac: zodiacChoice
    })
    window.location.assign('/auth/query')
  }

  useEffect(() => {
    setForm(checkPath())
  }, [])

  return (
    <>
    {props.authState.isAuthenticated ? (props.history.push('/')) : (
      <div className="auth-page leave-room-for-jesus-i-mean-navbar">
        <div>{/*spacer for navbar*/}</div>
        <div className="auth-form-wrapper">
          <button onClick={()=>{setForm(false)}}>Log In</button> or <button onClick={()=>{setForm(true)}}>Sign Up</button>
          <form className="auth-form">
            {isRegister ? (<input
                type="email"
                name="email"
                value={props.authState.email}
                onChange={handleChange}
                placeholder="email address"
                required
            />) : (null)}
            <input
                type="username"
                name="userName"
                value={props.authState.username}
                onChange={handleChange}
                placeholder="username"
                required
            />
            {isRegister ? (<input
                type="text"
                name="preferredName"
                value={props.authState.preferredName}
                onChange={handleChange}
                placeholder="your preferred name"
            />) : (null)}
            <input
                type="password"
                name="password"
                value={props.authState.password}
                onChange={handleChange}
                placeholder="password"
                required
            />
            {isRegister ? (<input
                type="number"
                onInput={(e)=>{ 
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)
              }}
                name="zipCode"
                value={props.authState.zipCode}
                onChange={handleChange}
                placeholder="zip code"
            />) : (null)}
            {isRegister ? (
                <select name="zodiac"
                  defaultValue={zodiacChoice}
                  onChange={handleOptionChange}
                >
                  <option></option>
                  <option value="Aquarius">Aquarius</option>
                  <option value="Pisces">Pisces</option>
                  <option value="Aries">Aries</option>
                  <option value="Taurus">Taurus</option>
                  <option value="Gemini">Gemini</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Leo">Leo</option>
                  <option value="Virgo">Virgo</option>
                  <option value="Libra">Libra</option>
                  <option value="Scorpio">Scorpio</option>
                  <option value="Sagittarius">Sagittarius</option>
                  <option value="Capricorn">Capricorn</option>
                  <option value="Don't know/Don't care">Don't know/Don't care</option>
                </select>
            ) : (null)}
              {isRegister ? (
                <button onClick={handleSubmitRegister}>
                  Submit
                </button>
              ) : (
                <button onClick={handleSubmitLogin}>
                  Log In
                </button>
              )}
          </form>
        </div>
    </div>)}
      </>
  )
}
export default connect(mapStateToProps, mapDispatchToProps) (Auth)
