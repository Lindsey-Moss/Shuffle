import {
  GetUser,
  UpdateUser,
  DeleteUser
} from '../../services/UserServices'

import { 
  GET_USER_INFO,
  EDIT_USER_FORM,
  UPDATE_USER,
  DELETE_USER
 } from '../types'

export const UserFormField = (formName, formValue) => ({
  type: EDIT_USER_FORM,
  payload: {name: formName, value: formValue}
})

export const LoadUser = (userID) => {
  return async (dispatch) => {
    try {
      const user = await GetUser(userID)
      dispatch({
        type: GET_USER_INFO,
        payload: user 
      })
    } catch (error) {
      throw error
    }
  }
}

export const UpdateUserAction = (userID, userForm) => {
  return async (dispatch) => {
    try {
      const user = await UpdateUser(userID, userForm)
      dispatch({
        type: UPDATE_USER,
        payload: user
      })
    } catch (error) {
      throw error
    }
  }
}

export const DeleteUserAction = (userID) => {
  return async (dispatch) => {
    try {
      await DeleteUser(userID)
      dispatch({
        type: DELETE_USER
      })
    } catch (error) {
      throw error
    }
  }
}