import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import JournalReducer from './reducers/JournalReducer'
import TarotReducer from './reducers/TarotReducer'
import UserReducer from './reducers/UserReducer'
import NavReducer from './reducers/NavReducer'

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    journalState: JournalReducer,
    tarotState: TarotReducer,
    userState: UserReducer,
    navState: NavReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
