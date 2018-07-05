import { createStore } from 'redux'
import listReducer from './reducers/list'

export default createStore(listReducer)