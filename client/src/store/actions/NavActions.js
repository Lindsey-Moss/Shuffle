import { 
  SET_FROM,
  CHECK_PATH
} from '../types'

export const SetFrom = (string) => ({
  type: SET_FROM,
  payload: string
})

export const CheckPath = (string) => ({
  type: CHECK_PATH,
  payload: string
})