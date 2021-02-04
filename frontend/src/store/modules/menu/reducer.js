import types from './types'

const INITIAL_STATE = {
  menu: {},
}

function menu(state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case types.REQUEST_MENUS: {
      const response = payload ? payload.data : null
      const menu = response ? response.data : null
      return { ...state, menu }
    }

    default:
      return state
  }
}

export default menu
