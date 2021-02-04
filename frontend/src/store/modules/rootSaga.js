import { all } from 'redux-saga/effects'

import menu from './menu/sagas'

export default function* rootSaga() {
  return yield all([menu])
}
