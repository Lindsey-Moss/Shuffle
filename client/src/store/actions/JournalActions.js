import { 
  DeleteEntry,
  GetAllUsersEntries, 
  GetFilteredEntries, 
  GetIconEntries, 
  PostNewEntry,
  UpdateEntry
} from '../../services/JournalServices'

import { 
  ENTRY_FORM,
  SET_READ_INFO,
  POST_ENTRY,
  SET_ENTRIES,
  TOGGLE_EDIT_ENTRY,
  EDIT_ENTRY_FORM,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  SET_ENTRY_TITLE
 } from '../types'

export const EntryFormField = (formName, formValue) => ({
  type: ENTRY_FORM,
  payload: { name: formName, value: formValue }
})

export const EditEntryFormField = (formName, formValue) => ({
  type: EDIT_ENTRY_FORM,
  payload: { name: formName, value: formValue }
})

export const SetReadInfo = (read) => ({
  type: SET_READ_INFO,
  payload: read
})

export const ToggleEditEntryForm = (entryobj) => ({
  type: TOGGLE_EDIT_ENTRY,
  payload: entryobj
})

export const SetEntryTitle = (string) => ({
  type: SET_ENTRY_TITLE,
  payload: string
})

export const LoadAllUserEntries = (userID) => {
  return async (dispatch) => {
    try {
      const entries = await GetAllUsersEntries(userID)
      dispatch({
        type: SET_ENTRIES,
        payload: entries 
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadFilteredEntries = (userID, string) => {
  return async (dispatch) => {
    try {
      const entries = await GetFilteredEntries(userID, string)
      dispatch({
        type: SET_ENTRIES,
        payload: entries 
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadIconEntries = (userID, icon) => {
  return async (dispatch) => {
    try {
      const entries = await GetIconEntries(userID, icon)
      dispatch({
        type: SET_ENTRIES,
        payload: entries 
      })
    } catch (error) {
      throw error
    }
  }
}

export const PostNewEntryAction = (userID, entryForm) => {
  return async (dispatch) => {
    try {
      const posted = await PostNewEntry(userID, entryForm)
      dispatch({
        type: POST_ENTRY,
        payload: posted
      })
    } catch (error) {
      throw error
    }
  }
}

export const DeleteEntryAction = (userID, entryID) => {
  return async (dispatch) => {
    try {
      await DeleteEntry(userID,entryID)
      dispatch({
        type: DELETE_ENTRY,
        payload: entryID
      })
    } catch (error) {
      throw error
    }
  }
}

export const UpdateEntryAction = (userID, entryID, entryForm) => {
  return async (dispatch) => {
    try {
      const entry = await UpdateEntry(userID, entryID, entryForm)
      dispatch({
        type: UPDATE_ENTRY,
        payload: entry
      })
    } catch (error) {
      throw error
    }
  }
}
