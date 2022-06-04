/*
  * Работа с сервером
*/
import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
const $authHost = axios.create({
  baseURL:process.env.REACT_APP_API_URL
})
// Принимает конфиг при запросе
const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
}
// Добавляем интерцептор для запроса
$authHost.interceptors.request.use(authInterceptor);

export {
  $host, 
  $authHost
}