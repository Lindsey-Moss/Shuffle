import { 
  SignUp,
  LogIn,
  __CheckSession
 } from '../../services/AuthServices'

import {
  AUTHENTICATED,
  AUTH_FORM,
  LOGIN,
  REGISTER,
  TOGGLE_AUTH
} from '../types'

export const ToggleAuth = (boolean) => ({
  type: TOGGLE_AUTH,
  payload: boolean
})

export const AuthFormField = (formName, formValue) => ({
  type: AUTH_FORM,
  payload: { name: formName, value: formValue }
})

export const Register = (authForm) => async (dispatch) => {
  try {
    const register = await SignUp(authForm)
    dispatch({
      type: REGISTER,
      payload: register.userName
    })
  } catch (error) {
    throw error
  }
}

export const SetUser = (payload) => ({
  type: LOGIN,
  payload: payload
})

export const SignIn = (authForm) => async (dispatch) => {
  try {
    const login = await LogIn(authForm)
    dispatch({
      type: LOGIN,
      payload: login.user.id
    },{
      type: AUTHENTICATED,
      payload: true
    })
  } catch (error) {
    return alert('Your username or password is incorrect.')
  }
}

export const SessionChecked = () => async (dispatch) => {
  try {
      const loggedUser = await __CheckSession()
      dispatch({
          type: AUTHENTICATED,
          payload: loggedUser.id
      })
  } catch (error) {
      throw error
  }
}