import { combineReducers } from 'redux'
import { todoReducer } from './toDoRedux'

export const rootReducer = combineReducers({
    todo: todoReducer, 
})


