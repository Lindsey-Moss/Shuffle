import { 
  SET_ENTRIES,
  ENTRY_FORM,
  SET_READ_INFO,
  AUTOSAVE,
  POST_ENTRY,
  TOGGLE_EDIT_ENTRY,
  EDIT_ENTRY_FORM,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  SET_ENTRY_TITLE
 } from '../types'

const iState = {
  editing: false,
  editingEntry: {},
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
      return { 
        ...state, 
        viewingEntries: [...state.viewingEntries, { ...action.payload }],
        read:null,
        entryTitle:'',
        entryBody:'',
        entryIcon:null
      }
    case AUTOSAVE:
      console.log(`Daily draw autosaved successfully.`)
      console.log(action.payload)
      return {...state}
    case DELETE_ENTRY:
      return {
        ...state, 
        viewingEntries: [...state.viewingEntries.filter((entry) => entry.entryID !== action.payload)]
      }
    case TOGGLE_EDIT_ENTRY:
      return { ...state, editing: !state.editing, editingEntry: action.payload }
    case EDIT_ENTRY_FORM:
      return {
        ...state, 
        editingEntry:{
          ...state.editingEntry, 
          [action.payload.name]:action.payload.value
        }
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
