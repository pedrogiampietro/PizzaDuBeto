import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'

// import accountReducer from './reducers/AccountReducer'
import menuReducer from './reducers/MenuReducer'

const reducers = combineReducers({
  //   account: accountReducer,
  menu: menuReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store
