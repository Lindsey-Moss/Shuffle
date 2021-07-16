import { 
  SET_FROM,
  CHECK_PATH,
  TOGGLE_NAV
} from '../types'

export const SetFrom = (string) => ({
  type: SET_FROM,
  payload: string
})

export const CheckPath = (string) => ({
  type: CHECK_PATH,
  payload: string
})

export const ToggleNav = (bool) => ({
  type: TOGGLE_NAV,
  payload: bool
})