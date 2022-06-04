import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addAccessory = async (accessory) => {
  console.log(accessory)
  const { data } = await $authHost.post('api/accessories', accessory)
  return data
}
export const fetchAccessories = async ( rubricId, limit = 4, page) => {
  const { data } = await $host.get('api/accessories', { params: { rubricId, limit, page } })
  return data;
}


export const fetchOneAccessory = async (id) => {
  const { data } = await $host.get('api/accessories/' + id)
  console.log(data)
  return data;
}