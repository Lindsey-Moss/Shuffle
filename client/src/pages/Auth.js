import React, { useEffect } from 'react'
import {connect } from 'react-redux'
import {
  SignIn, 
  AuthFormField,
  Register,
  ToggleAuth
} from '../store/actions/AuthActions'
import { ToggleNav } from '../store/actions/NavActions'

const mapStateToProps = ({authState, navState}) => {
  return {authState, navState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthForm: (formName, formValue) => dispatch(AuthFormField(formName, formValue)),
    setLogin: (authForm) => dispatch(SignIn(authForm)), 
    setRegister: (authForm) => dispatch(Register(authForm)),
    setFormType: (boolean) => dispatch(ToggleAuth(boolean)),
    toggleNav: (boolean) => dispatch(ToggleNav(boolean))
  }
}

const Auth = (props) => {
  const { setFormType } = props
  
  const checkPath = () => {
    if ((window.location.pathname).includes('query')) {
      return false
    } else {
      return true
    }
  }

  const handleChange = (e) => {
    props.setAuthForm(e.target.name, e.target.value)
  }

  const whereTo = () => {
    switch (props.navState.from) {
      case 'newentry':
        return props.history.push('/journal/new')
      case 'journal':
        return props.history.push('/journal')
      case 'profile':
        return props.history.push('/profile')
      default:
        return window.location.assign('/')
    }
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    const authForm = {
      userName: props.authState.userName,
      password: props.authState.password
    }
    try {
      await props.setLogin(authForm)
      whereTo()
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
      zodiac: props.authState.zodiac
    })
    window.location.assign('/auth/query')
  }

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  useEffect(() => {
    setFormType(checkPath());
    checkSide()
  }, [])

  return (
    <>
    {props.authState.isAuthenticated ? (props.history.push('/')) : (
      <div className="auth-page leave-room-for-jesus-i-mean-navbar">
        <div>{/*spacer for navbar*/}</div>
        <div className="auth-form-wrapper">
          <button onClick={()=>{setFormType(false)}}>Log In</button> or <button onClick={()=>{setFormType(true)}}>Sign Up</button>
          <form className="auth-form">
            {props.authState.needRegister ? (<input
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
            {props.authState.needRegister ? (<input
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
            {props.authState.needRegister ? (<input
                type="number"
                onInput={(e)=>{ 
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)
              }}
                name="zipCode"
                value={props.authState.zipCode}
                onChange={handleChange}
                placeholder="zip code"
            />) : (null)}
            {props.authState.needRegister ? (
                <select name="zodiac"
                  defaultValue={props.authState.zodiac}
                  onChange={handleChange}
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
              {props.authState.needRegister ? (
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
