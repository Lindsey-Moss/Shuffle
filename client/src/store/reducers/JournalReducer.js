import { 
  SET_ENTRIES,
  ENTRY_FORM,
  SET_READ_INFO,
  POST_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  SET_ENTRY_TITLE
 } from '../types'

const iState = {
  viewingEntries: [],
  read: null,
  entryTitle: '',
  entryBody: '',
  entryIcon: null
}

const JournalReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_ENTRIES:
      return {...state, viewingEntries: action.payload}
    case SET_READ_INFO:
      return {...state, read: action.payload}
    case SET_ENTRY_TITLE:
      return {...state, entryTitle: action.payload}
    case ENTRY_FORM:
      return { ...state, [action.payload.name]: action.payload.value }
    case POST_ENTRY:
      return { ...state, viewingEntries: [...state.viewingEntries, { ...action.payload }]}
    case DELETE_ENTRY:
      return {
        ...state, 
        viewingEntries: state.viewingEntries.filter((entry) => entry.entryID !== action.payload)
      }
    case UPDATE_ENTRY:
      let targetEntryIndex = state.viewingEntries.findIndex(entry => entry.entryID === action.payload.entryID)
      state.viewingEntries[targetEntryIndex] = action.payload
      return { ...state }
    default:
      return { ...state }
  }
}

export default JournalReducer
