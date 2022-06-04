import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { fetchFavs, fetchFavsOne } from "../../http/favoritesApi";
import { fetchOneProduct } from "../../http/productsApi";
import { ProductCard } from "../MainPage/MainPageAssets";

const Favorites = observer(() => {
  const { user } = useContext(Context);
  const [favId, setFavId] = useState(null);
  const [favProducts, setFavProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const id = localStorage.getItem("favId");
  if (id !== null) {
  }
  useEffect(() => {
    fetchFavs(id)
      .then((data) => {
        const newFavs = data[0];
        return newFavs;
      })
      .then((data) => {
        setFavProducts([...data])
      });
      setUpdate(false)
  }, [update]);

  return (
    <>
      <main>
        <section className="favorites">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="favorites__title title">Избранное</h1>
                {user.isAuth ? (
                  favProducts.length ? (
                    <div className="favorites__wrap wrap">
                      <ul className="favorites-products__list product-card__list">
                        {favProducts.map((item) => {
                          return (
                            <li
                              key={item.prodId}
                              className="favorites-products__list-item product-card__item"
                            >
                              <ProductCard
                                rate={item.rate}
                                comments={item.comments}
                                tag={item.rubrics}
                                forW={item.forWhat}
                                name={item.name}
                                type={item.types}
                                img={process.env.REACT_APP_API_URL + item.img}
                                desc={item.description}
                                acidity={item.acidity}
                                density={item.density}
                                for250g={item.for250g}
                                for1000g={item.for1000g}
                                id={item.prodId}
                                onFavRemove={() => setUpdate(true)}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <p>Вы пока еще не добавили товары в избранное:)</p>
                  )
                ) : (
                  <p>Войдите в аккаунт для доступа избранного</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default Favorites;
