import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addProduct = async (product) => {
  console.log(product)
  const {data} = await $authHost.post('api/products', product)
  return data
}
export const fetchProducts = async (forWhat, rubricid, limit = 4, page = 1) => {
  const {data} = await $host.get('api/products',{params:{forWhat, rubricid, limit, page}})
  return data;
}


export const fetchOneProduct = async (id) => {
  console.log('id:',id)
  const {data} = await $host.get('api/products/' + id)
  console.log(data)
  return data;
}