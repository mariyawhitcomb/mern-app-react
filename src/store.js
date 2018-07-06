import { createStore } from 'redux'
import listReducer from './reducers/list'

export default createStore(
    listReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )