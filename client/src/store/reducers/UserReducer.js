import { 
  GET_USER_INFO,
  EDIT_USER_FORM,
  UPDATE_USER,
  DELETE_USER
 } from '../types'

const iState = {
  thisUsersInfo: {},
  updateUser: {
    email: '',
    userName: '',
    preferredName: '',
    zipCode: '',
    zodiac: '',
    image: ''
  }
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, thisUsersInfo: action.payload }
    case EDIT_USER_FORM:
      return { ...state, updateUser: {...state.updateUser, [action.payload.name]:action.payload.value}}
    case UPDATE_USER:
      return { 
        ...state, 
        thisUsersInfo: action.payload,
        updateUser: {
          email: '',
          userName: '',
          preferredName: '',
          zipCode: '',
          zodiac: '',
          image: ''
      }}
    case DELETE_USER:
      return { 
        ...state, 
        thisUsersInfo: {},
        updateUser: {
          email: '',
          userName: '',
          preferredName: '',
          zipCode: '',
          zodiac: '',
          image: ''
      }}
    default:
      return { ...state }
  }
}

export default UserReducer
