import { MENU_LIST } from '../actions/MenuActions'

const initialState = {
  menu: null,
  menus: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case MENU_LIST: {
      const response = payload ? payload.data : null
      const menu = response ? response.data : null
      return { ...state, menu }
    }

    default:
      return state
  }
}
