import { apiGet, apiPost } from '../helpers/Api'

export const MENU_LIST = 'MENU_LIST'
export const PRODUCT_ADD = 'PRODUCT_ADD'

export const getMenuList = (data) => {
  const payload = apiGet('/menu', data)
  return { type: MENU_LIST, payload }
}

export const addNewProduct = (data) => {
  const payload = apiPost('/menu', data)
  return { type: PRODUCT_ADD, payload }
}
