
const iState = {
  allCards: [],
  thisRead: []
}

const ReadReducer = (state = iState, action) => {
  switch (action.type) {
    case 'TYPE':
      return { ...state }
    default:
      return { ...state }
  }
}

export default ReadReducer
