import types from './types'

export function requestMenus() {
  return {
    type: types.REQUEST_MENUS,
  }
}

export function setMenus(menus) {
  return {
    type: types.SET_MENUS,
    menus,
  }
}
