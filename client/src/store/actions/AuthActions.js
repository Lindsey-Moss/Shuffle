import { 
  SignUp,
  LogIn
 } from '../../services/AuthServices'

import {
  AUTHENTICATED,
  AUTH_FORM,
  LOGIN,
  REGISTER
} from '../types'

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

export const SessionChecked = (payload) => ({
  type: AUTHENTICATED,
  payload: payload
})
