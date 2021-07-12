import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import JournalReducer from './reducers/JournalReducer'
import ReadReducer from './reducers/ReadReducer'
import UserReducer from './reducers/UserReducer'

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    journalState: JournalReducer,
    readState: ReadReducer,
    userState: UserReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
