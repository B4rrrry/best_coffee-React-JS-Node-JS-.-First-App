import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userApi";
import Preloader from "./components/Preloader/Preloader";
import { fetchFavId, fetchFavs } from "./http/favoritesApi";
import { fetchTotalPrice } from "./http/basketApi";

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  /* 
    * ИДет проверка на авторизацию, крутится прелоудер
    * как пройдет проверка авторизации, то появится страница
  */

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setAboutUser({
          fName: localStorage.getItem('firstName'),
          sName: localStorage.getItem('secondName')
        })
        user.setUser(true);
        user.setIsAuth(true);
        user.setUserRole(data.role)
        user.setUserId(data.id);
        user.setFavUserId(data.favId)
        user.setBasketId(data.basketId)
        fetchTotalPrice(user.basketId).then(data => {
          user.setTotalSum(data[0][0].sum)
          user.setTotalCount(data[0][0].count)
        })
      }).finally(() => setLoading(false))
    }, 2000)

  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Preloader loading={loading} />
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
})

export default App;
