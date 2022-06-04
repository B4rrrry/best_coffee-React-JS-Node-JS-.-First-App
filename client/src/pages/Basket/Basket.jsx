import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import BasketItem from "../../components/BasketItem/BasketItem";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import { fetchBasketProducts,fetchTotalPrice } from "../../http/basketApi";

const Basket = observer(() => {
  const { user } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetchBasketProducts(user.basketId).then((data) => {
      setUpdate(false);
      return setProducts([...data[0]]);
    });
    fetchTotalPrice(user.basketId).then((data) => {
      user.setTotalSum(data[0][0].sum);
      user.setTotalCount(data[0][0].count);
    });
  }, [user.basketId, update]);
  return (
    <>
      <main>
        <section className="basket">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {user.isAuth ? (
                  <form action="" className="basket__form basket__wrap">
                    <div className="basket__form-row">
                      <div className="basket__form-wrap">
                        <h2 className="basket__form-title title">Оформление</h2>
                        <div className="basket__form-info">
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="text"
                              placeholder="ФИО"
                              className="basket__form-input"
                            />
                          </label>
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="email"
                              placeholder="E-mail"
                              className="basket__form-input"
                            />
                          </label>
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="tel"
                              placeholder="Номер телефона"
                              className="basket__form-input"
                            />
                          </label>
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="text"
                              placeholder="Город"
                              className="basket__form-input"
                            />
                          </label>
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="text"
                              placeholder="Улица"
                              className="basket__form-input"
                            />
                          </label>
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="text"
                              placeholder="Дом"
                              className="basket__form-input"
                            />
                          </label>
                          <label htmlFor="" className="basket__form-label">
                            <input
                              type="text"
                              placeholder="Квартира"
                              className="basket__form-input"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="basket__list-wrap">
                        <h1 className="basket__title title">Корзина</h1>
                        <ul className="basket__list">
                          {products.length ? (
                            products.map((prod, i) => {
                              console.log(prod);
                              return (
                                <BasketItem
                                  key={prod.id}
                                  productId={prod.productId}
                                  img={prod.img}
                                  name={prod.name}
                                  count={prod.count}
                                  sum={prod.price}
                                  weight={prod.weight}
                                  setUpdate={setUpdate}
                                />
                              );
                            })
                          ) : (
                            <ErrorMsg />
                          )}
                        </ul>
                        <textarea
                          name=""
                          id=""
                          className="basket__comment"
                          placeholder="Комментарий к заказу"
                        ></textarea>
                      </div>
                    </div>
                    <div className="basket__order">
                      <p className="basket__order-price">
                        К оплате: <span>{user.totalSum}</span> ₽
                      </p>
                      <input
                        type="submit"
                        value="Оформить заказ"
                        className="basket__order-sub"
                      />
                    </div>
                  </form>
                ) : (
                  <p>Войдите в аккаунт для доступа корзины</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default Basket;
