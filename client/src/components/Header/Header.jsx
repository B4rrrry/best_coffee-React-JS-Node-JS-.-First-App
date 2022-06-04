import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import {
  ACCESSORIES,
  CATALOG,
  MAIN,
  ARTICLES,
  HOW_ARTICLE,
  FAVORITES,
  BASKET,
  REGISTRATION,
  ADMIN_PANEL_ACCESSORIES,
} from "../../utils/consts";
import AuthModal from "../AuthModal/AuthModal";
import { Logo, Arrow, Favorites, Basket } from "./HeaderAssets";
import { useHistory } from "react-router-dom";
import CallsModal from "../CallsModal/CallsModal";

const Header = observer(() => {
  const [authModal, setAuthModal] = useState(false);
  const [callsModal, setCallsModal] = useState(false);
  const { user } = useContext(Context);
  const history = useHistory();
  const onChangeAuthModal = () => {
   
    setAuthModal(!authModal);
  };
  const onChangeCallsModal = () => {
    setCallsModal(!callsModal);
  };
  const onLogoutHandler = (e) => {
    e.preventDefault();
    user.setAboutUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("secondName");
    localStorage.removeItem("id");
    localStorage.removeItem("favId");
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-top">
                <ul className="header-top__list">
                  <li className="header-top__item">
                    <a href="#" className="header-top__link">
                      Более 300 пунктов <span></span> выдачи заказов
                    </a>
                  </li>
                  <li className="header-top__item">
                    <a href="#"  onClick={onChangeCallsModal} className="header-top__link">
                      8 (800) 333-49-80
                    </a>
                    <CallsModal callsModal={callsModal} setCallsModal={setCallsModal} />
                  </li>
                  <li className="header-top__item">
                    <Link to={HOW_ARTICLE} className="header-top__link">
                      Как выбрать кофе?
                    </Link>
                  </li>
                  <li className="header-top__item">
                    <Link to={ARTICLES} className="header-top__link">
                      Как приготовить?
                    </Link>
                  </li>
                </ul>
                {user.isAuth ? (
                  <ul className="header-top__menu">
                    <li className="header-top__menu-item header-top__menu-item--login">
                      <button
                        onClick={console.log()}
                        className="header-top__menu-btn header-top__menu-btn--login"
                      >
                        <span className="header-top__menu-btn--icon">
                          <svg
                            width="13"
                            height="15"
                            viewBox="0 0 13 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="header-top__menu-btn--auth"
                          >
                            <path
                              d="M0.999947 13.475C1.014 12.3346 1.39596 11.2292 2.08895 10.3234C2.78195 9.41762 3.74893 8.75983 4.84595 8.44798"
                              stroke="#6A6868"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11.7389 13.475C11.7249 12.3346 11.3429 11.2292 10.6499 10.3234C9.95695 9.41764 8.98996 8.75985 7.89294 8.448"
                              stroke="#6A6868"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M6.3899 8.322C8.51288 8.322 10.2339 6.68291 10.2339 4.661C10.2339 2.63909 8.51288 1 6.3899 1C4.26692 1 2.5459 2.63909 2.5459 4.661C2.5459 6.68291 4.26692 8.322 6.3899 8.322Z"
                              stroke="#6A6868"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        {user.aboutUser}
                      </button>
                    </li>
                    {user.userRole === "ADMIN" ? (
                      <li className="header-top__menu-item">
                        <button className="header-top__menu-btn header-top__menu-btn--login">
                          <Link
                            to={ADMIN_PANEL_ACCESSORIES}
                            className="header-top__link"
                          >
                            Админ панель
                          </Link>
                        </button>
                      </li>
                    ) : null}
                    <li className="header-top__menu-item">
                      <button
                        onClick={onLogoutHandler}
                        className="header-top__menu-btn header-top__menu-btn--login"
                      >
                        Выход
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="header-top__menu">
                    <li className="header-top__menu-item header-top__menu-item--login">
                      <button
                        onClick={onChangeAuthModal}
                        className="header-top__menu-btn header-top__menu-btn--login"
                      >
                        <span className="header-top__menu-btn--icon">
                          <svg
                            width="13"
                            height="15"
                            viewBox="0 0 13 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="header-top__menu-btn--auth"
                          >
                            <path
                              d="M0.999947 13.475C1.014 12.3346 1.39596 11.2292 2.08895 10.3234C2.78195 9.41762 3.74893 8.75983 4.84595 8.44798"
                              stroke="#6A6868"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11.7389 13.475C11.7249 12.3346 11.3429 11.2292 10.6499 10.3234C9.95695 9.41764 8.98996 8.75985 7.89294 8.448"
                              stroke="#6A6868"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M6.3899 8.322C8.51288 8.322 10.2339 6.68291 10.2339 4.661C10.2339 2.63909 8.51288 1 6.3899 1C4.26692 1 2.5459 2.63909 2.5459 4.661C2.5459 6.68291 4.26692 8.322 6.3899 8.322Z"
                              stroke="#6A6868"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        Вход
                      </button>
                      <AuthModal
                        authModal={authModal}
                        setAuthModal={setAuthModal}
                      />
                    </li>
                    <li className="header-top__menu-item">
                      <Link to={REGISTRATION} className="header-top__menu-btn">
                        Регистрация
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="header-bot">
                <Link to={MAIN} className="header__logo">
                  <img
                    src={Logo}
                    alt="Best Coffee"
                    className="header__logo-img"
                  />
                  <p className="header__logo-text">
                    Интернет-магазин <span></span> свежего кофе
                  </p>
                </Link>
                <nav>
                  <ul className="header__nav">
                    <li className="header__nav-item">
                      <Link to={CATALOG} className="header__nav-link">
                        Купить
                        <img
                          src={Arrow}
                          alt="arrow"
                          className="header__nav-arrow"
                        />
                      </Link>
                      <ul className="header__nav-subnav header__subnav">
                        <li className="header__subnav-item">
                          <Link to={CATALOG} className="header__subnav-link">
                            Кофе
                          </Link>
                        </li>
                        <li className="header__subnav-item">
                          <Link
                            to={ACCESSORIES}
                            className="header__subnav-link"
                          >
                            Аксессуары
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__nav-item">
                      <Link to="/" className="header__nav-link">
                        Отзывы
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to={ARTICLES} className="header__nav-link">
                        Читать
                        <img
                          src={Arrow}
                          alt="arrow"
                          className="header__nav-arrow"
                        />
                      </Link>
                      <ul className="header__nav-subnav header__subnav header__subnav--read">
                        <li className="header__subnav-item">
                          <Link to={ARTICLES} className="header__subnav-link">
                            Журнал о кофе
                          </Link>
                        </li>
                        <li className="header__subnav-item">
                          <Link
                            to={HOW_ARTICLE}
                            className="header__subnav-link"
                          >
                            Как выбрать кофе?
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__nav-item">
                      <a href="#" className="header__nav-link">
                        Доставка и оплата
                      </a>
                    </li>
                  </ul>
                </nav>
                <ul className="header__btns">
                  <li className="header__btns-item">
                    <Link to={FAVORITES} className="header__btns-link">
                      <img
                        src={Favorites}
                        alt="Favorites"
                        className="header__btns-img"
                      />
                    </Link>
                  </li>
                  <li className="header__btns-item">
                    <Link to={BASKET} className="header__btns-link">
                      <img
                        src={Basket}
                        alt="Basket"
                        className="header__btns-img"
                      />
                    </Link>
                    <div className="header__btns-basket">
                      <p className="header__btns-basket-price">
                        <span>{user.totalSum}</span> ₽
                      </p>
                      <p className="header__btns-basket-products">
                        <span>{user.totalCount}</span> товаров
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
});
export default Header;
