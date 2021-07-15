import { 
  SET_FROM,
  CHECK_PATH
} from '../types'

const iState = {
  from: '',
  on: ''
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_FROM:
      return { ...state, from: action.payload }
    case CHECK_PATH:
      return { ...state, on: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
