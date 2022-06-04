import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addCall = async (info) => {
  console.log(info)
  const {data} = await $authHost.post('api/calls', info)
  return data
}
export const fetchCalls = async () => {
  const {data} = await $host.get('api/calls')
  return data;
}


