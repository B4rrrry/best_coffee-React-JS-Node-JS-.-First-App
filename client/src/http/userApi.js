import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
import { fetchFavs } from "./favoritesApi";
/* 
  * jwt decode декодирует наш токен и отображает данные 
*/
export const registration = async (info) => {
  const { firstName, secondName, lastName, email,
    phone, city, street, flat, index, password } = info;
  const { data } = await $host.post('api/users/registration',
    {
      firstName, secondName, lastName, email, password,
      phone, city, street, flat, index, /* role: 'ADMIN' */
    })
  localStorage.setItem('token', data.token)
  console.log(data)
  return {
    token: jwt_decode(data.token),
    fName: data.fName,
    sName: data.sName,
    favId: data.favId,
    basketId: data.basketId
  }
}

export const login = async (email, password) => {
  const { data } = await $host.post('api/users/login', { email, password });
  localStorage.setItem('token', data.token)
  return {
    token: jwt_decode(data.token),
    fName: data.fName,
    sName: data.sName,
    favId: data.favId,
    basketId: data.basketId
  };
}

export const check = async () => {
  /* 
    * Функция которая проверяет при обновлении страницы токен, если он есть, то пользователь будет в аккаунте, если нет, то нужна будет авторизация
  */
  const { data } = await $authHost.get('api/users/auth');
  localStorage.setItem('token', data.token)
  localStorage.setItem('favId', data.favId)
  localStorage.setItem('basketId', data.basketId)
  return { token: jwt_decode(data.token), basketId: data.basketId, favId: data.favId };
}