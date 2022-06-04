import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
/* export const addRubric = async (product) => {
  console.log(product)
  const {data} = await $authHost.post('api/products', product)
  return data
} */
export const fetchTypes = async () => {
  const {data} = await $host.get('api/type')
  return data;
}


export const fetchOneProduct = async (id) => {
  const {data} = await $host.get('api/products/' + id)
  console.log(data)
  return data;
}