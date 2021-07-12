
const iState = {
  isAuthenticated: false
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case 'TYPE':
      return { ...state }
    default:
      return { ...state }
  }
}

export default AuthReducer
