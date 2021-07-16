import {
  AUTHENTICATED,
  AUTH_FORM,
  REGISTER,
  LOGIN,
  TOGGLE_AUTH
} from '../types'

const iState = {
  needRegister: false,
  email: '',
  userName: null,
  preferredName: '',
  password: '',
  zipCode: '',
  zodiac: '',
  isAuthenticated: false,
  thisUser: null
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {...state, needRegister: action.payload }
    case AUTH_FORM:
      return { ...state, [action.payload.name]: action.payload.value }
    case REGISTER:
      return { ...state, userName: action.payload }
    case LOGIN:
      return { ...state, thisUser: action.payload }
    case AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload }
    default:
      return { ...state }
  }
}

export default AuthReducer