import { takeLatest, all, call, put, select } from 'redux-saga/effects'
import types from './types'
import { apiGet } from '../../../helpers/Api'
import { setMenus } from './actions'

export function* requestMenus() {
  const response = yield call(apiGet, '/menu')
  const res = response.data
  yield put(setMenus(res.menus))
}

export default all([takeLatest(types.REQUEST_MENUS, requestMenus)])
