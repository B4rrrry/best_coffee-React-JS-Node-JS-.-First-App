import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addOrder = async (order) => {
  console.log(order)
  const {data} = await $authHost.post('api/orders', order)
  return data
}
export const fetchOrders = async () => {
  const {data} = await $host.get('api/orders')
  return data;
}


