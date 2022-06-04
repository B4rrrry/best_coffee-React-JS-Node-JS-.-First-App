import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const addFav = async (fav) => {
  console.log(fav)
  const {data} = await $authHost.post('api/favorites', fav)
  return data
}
export const fetchFavs = async (id) => {
  const {data} = await $authHost.get('api/favorites/'+ id)
  return data;
}

export const fetchFavsOne = async (id1) => {
  console.log(id1)
  const {data} = await $authHost.post('api/favorites/prod',id1)
  return data;
}


