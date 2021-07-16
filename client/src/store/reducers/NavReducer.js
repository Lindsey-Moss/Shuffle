import { 
  SET_FROM,
  CHECK_PATH,
  TOGGLE_NAV
} from '../types'

const iState = {
  from: '',
  on: '',
  navOpen: true
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_FROM:
      return { ...state, from: action.payload }
    case CHECK_PATH:
      return { ...state, on: action.payload }
    case TOGGLE_NAV:
      let aside = document.querySelector('.navbar')
      let spacer = document.querySelector('.leave-room-for-jesus-i-mean-navbar')
      if (action.payload){
        spacer.style.gridTemplateColumns= '180px 1fr'
        aside.style.width="180px";
        aside.style.opacity=1;
        aside.style.zIndex=10
      } else {
        spacer.style.gridTemplateColumns = '40px 1fr'
        aside.style.width = 0;
        aside.style.opacity = 0;
        aside.style.zIndex = -999
      }
      return { ...state, navOpen: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
