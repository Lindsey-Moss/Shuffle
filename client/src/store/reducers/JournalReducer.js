
const iState = {
  newEntry: null
}

const JournalReducer = (state = iState, action) => {
  switch (action.type) {
    case 'TYPE':
      return { ...state }
    default:
      return { ...state }
  }
}

export default JournalReducer
