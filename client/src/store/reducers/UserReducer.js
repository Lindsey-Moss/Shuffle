
const iState = {
  thisUser: {}
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case 'TYPE':
      return { ...state }
    default:
      return { ...state }
  }
}

export default UserReducer
