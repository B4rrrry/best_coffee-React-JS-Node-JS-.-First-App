/* 
  * Этот файл используется глобально
  * Он хранит состояния об авторизации
*/
import { makeAutoObservable } from 'mobx';
export default class ProductsStore {
  constructor() {
    this._products = []
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this) // мобх будет следить за переменными
  }
  /* 
    * Экшены, которые меняют состояния
  */
  setDevices(products) {
    this._products = products;
  }

  setPage(page) {
    this._page = page;
  }
  
  setTotalCount(count) {
    this._totalCount = count;
  }

  /* 
    * Геттеры, которые нужно для получения значений из переменных
  */

  get products() {
    return this._products;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit () {
    return this._limit;
  }

}