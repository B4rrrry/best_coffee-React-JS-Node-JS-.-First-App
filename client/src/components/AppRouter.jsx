import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "..";
import AddCoffee from "../pages/Admin/AddCoffee/AddCoffee";
import BackCalls from "../pages/Admin/BackCalls/BackCalls";
import Orders from "../pages/Admin/Orders/Orders";
import Subscribers from "../pages/Admin/Subscribers/Subscribers";
import {
  Accessories,
  Articles,
  Basket,
  Catalog,
  Favorites,
  HowArticle,
  MainPage,
  Registration,
  AddAccessories,
} from "../pages/index";
import ProductSingle from "../pages/ProductSingle/ProductSingle";
import {
  MAIN,
  ACCESSORIES,
  BASKET,
  CATALOG,
  FAVORITES,
  HOW_ARTICLE,
  REGISTRATION,
  ARTICLES,
  ADMIN_PANEL_ACCESSORIES,
  ADMIN_PANEL_COFFEE,
  ADMIN_PANEL_BACKCALLS,
  ADMIN_PANEL_ORDERS,
  ADMIN_PANEL_SUBSCRIBERS,
  PRODUCT_SINGLE,
} from "../utils/consts";
const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <Switch>
      <Route exact path={MAIN}>
        <MainPage />
      </Route>
      <Route exact path={CATALOG}>
        <Catalog />
      </Route>
      <Route exact path={ACCESSORIES}>
        <Accessories />
      </Route>
      <Route path={BASKET}>
        <Basket />
      </Route>
      <Route exact path={FAVORITES}>
        <Favorites />
      </Route>
      <Route path={ARTICLES}>
        <Articles />
      </Route>
      <Route exact path={HOW_ARTICLE}>
        <HowArticle />
      </Route>
      <Route exact path={REGISTRATION}>
        <Registration />
      </Route>
      <Route exact path={PRODUCT_SINGLE + ':id'}>
        <ProductSingle />
      </Route>
      {user.userRole === "ADMIN" ? (
        <>
          <Route exact path={ADMIN_PANEL_ACCESSORIES}>
            <AddAccessories />
          </Route>
          <Route exact path={ADMIN_PANEL_COFFEE}>
            <AddCoffee />
          </Route>
          <Route exact path={ADMIN_PANEL_BACKCALLS}>
            <BackCalls />
          </Route>
          <Route exact path={ADMIN_PANEL_ORDERS}>
            <Orders />
          </Route>
          <Route exact path={ADMIN_PANEL_SUBSCRIBERS}>
            <Subscribers />
          </Route>
        </>
      ) : null}

      <Route path="*">
        <MainPage />
      </Route>
    </Switch>
  );
});

export default AppRouter;
