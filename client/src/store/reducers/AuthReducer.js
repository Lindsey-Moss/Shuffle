import {
  AUTHENTICATED,
  AUTH_FORM,
  REGISTER,
  LOGIN
} from '../types'

const iState = {
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