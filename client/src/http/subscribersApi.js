import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addSub = async (sub) => {
  console.log(sub)
  const {data} = await $authHost.post('api/subs', sub)
  return data
}
export const fetchSubs = async () => {
  const {data} = await $host.get('api/subs')
  return data;
}


