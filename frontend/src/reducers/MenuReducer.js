import { MENU_LIST, PRODUCT_ADD } from '../actions/MenuActions'

const initialState = {
  menu: null,
  menus: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case MENU_LIST:
    case PRODUCT_ADD: {
      const response = payload ? payload.data : null
      const menu = response ? response.data : null
      return { ...state, menu }
    }

    default:
      return state
  }
}
