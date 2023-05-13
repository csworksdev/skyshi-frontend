import { all, call } from 'redux-saga/effects'
import { todoSaga } from './toDoSagas'

export default function * rootSaga () {
  yield all([
    call(todoSaga),
  ])
}