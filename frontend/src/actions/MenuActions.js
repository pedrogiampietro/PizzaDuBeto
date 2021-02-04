import { apiGet } from '../helpers/Api'

export const MENU_LIST = 'MENU_LIST'

export const getMenuList = (data) => {
  const payload = apiGet('/menu', data)
  return { type: MENU_LIST, payload }
}
