/* 
  * Этот файл используется глобально
  * Он хранит состояния об авторизации
*/
import { makeAutoObservable } from 'mobx';
export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    this._aboutUser = {}
    this._userRole = ''
    this._userId = ''
    this._favUserId = ''
    this._basketId = ''
    this._totalSum = 0
    this._totalCount = 0
    makeAutoObservable(this) // мобх будет следить за переменными
  }
  /* 
    * Экшены, которые меняют состояния
  */
  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setAboutUser(info) {
    this._aboutUser = info;
  }

  setUserRole(role) {
    this._userRole = role;
  }

  setUserId(id) {
    this._userId = id;
  }

  setFavUserId(id) {
    this._userId = id;
  }
  
  setBasketId(id) {
    this._basketId = id;
  }

  setTotalSum(sum) {
    this._totalSum = sum;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }


  /* 
    * Геттеры, которые нужно для получения значений из переменных
  */
  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  get aboutUser() {
    return `${this._aboutUser.fName} ${this._aboutUser.sName}`;
  }

  get userRole() {
    return this._userRole;
  }

  get userId() {
    return this._userId;
  }

  get favUserId() {
    return this._userId;
  }

  get basketId() {
    return this._basketId;
  }

  get totalSum() {
    return this._totalSum;
  }

  get totalCount() {
    return this._totalCount;
  }

}