import React from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_PANEL_ACCESSORIES, ADMIN_PANEL_BACKCALLS, ADMIN_PANEL_COFFEE, ADMIN_PANEL_ORDERS, ADMIN_PANEL_SUBSCRIBERS } from "../../utils/consts";

const AdminMenu = () => {
  return (
    <>
      <div className="admin-menu__wrap">
        <div className="col-lg-12">
          <h1 className="admin-menu__title title">Добро пожаловать!</h1>
          <ul className="admin-menu">
            <li className="admin-menu__item">
              <NavLink activeClassName="admin-menu__item--selected" to={ADMIN_PANEL_ORDERS}>
                <button className="admin-menu__btn">Заказы</button>
              </NavLink>
            </li>
            <li className="admin-menu__item">
              <NavLink activeClassName="admin-menu__item--selected" to={ADMIN_PANEL_BACKCALLS}>
                <button className="admin-menu__btn">Обратные звонки</button>
              </NavLink>
            </li>
            <li className="admin-menu__item">
              <NavLink activeClassName="admin-menu__item--selected" to={ADMIN_PANEL_COFFEE}>
                <button className="admin-menu__btn">Кофе</button>
              </NavLink>
            </li>
            <li className="admin-menu__item">
              <NavLink activeClassName="admin-menu__item--selected" to={ADMIN_PANEL_ACCESSORIES}>
                <button className="admin-menu__btn">Аксессуары</button>
              </NavLink>
            </li>
            <li className="admin-menu__item">
              <NavLink activeClassName="admin-menu__item--selected" to={ADMIN_PANEL_SUBSCRIBERS}>
                <button className="admin-menu__btn">Подписчики</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
