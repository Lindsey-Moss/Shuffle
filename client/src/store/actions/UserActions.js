import { SOMETHING } from '../types'

export const DoSomething = (argument) => ({
  type: SOMETHING,
  payload: argument
})

export const LoadSomething = () => {
  return async (dispatch) => {
    try {
      const res = await GetSomething()
      dispatch({
        type: GET_SOMETHING,
        payload: res.data //// probably
      })
    } catch (error) {
      throw error
    }
  }
}
