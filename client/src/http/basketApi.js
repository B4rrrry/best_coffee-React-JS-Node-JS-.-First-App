import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addBasketProd = async (basket) => {
  console.log(basket)
  const { data } = await $authHost.post('api/basket', basket)
  return data
}
export const fetchBasketProducts = async (id) => {
  const { data } = await $authHost.get('api/basket/' + id)
  return data;
}

export const fetchTotalPrice = async (id) => {
  console.log(id)
  const { data } = await $authHost.get('api/basket/totalprice/' + id)
  return data;
}

export const deleteProd = async (info) => {
  console.log(info)
  const { data } = await $authHost.post('api/basket/delete', info )
  return data;
}

export const updatePriceAndCount = async (info) => {
  const { data } = await $authHost.post('api/basket/update', info)
  return data;
}

