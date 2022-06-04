import React, { useContext, useEffect, useState } from "react";
import { ProductCard } from "../MainPage/MainPageAssets";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  InfoIconFirst,
  InfoIconSecond,
  BalanceEspresso,
  BalanceFilter,
  Capsule,
  Drip,
  Jar,
  LightEspresso,
  LightFilter,
} from "./CatalogAssets";
import CustomSelector from "../../components/CustomSelector/CustomSelector";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import CatalogOption from "../../components/CatalogOption/CatalogOption";
import { Context } from "../../index";
import { fetchProducts } from "../../http/productsApi";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

const Catalog = () => {
  const { products } = useContext(Context);

  /* Товары */
  const [catalogProducts, setCatalogProducts] = useState([]);
  /* Сортированные товары */
  const [sortedProducts, setSortedProducts] = useState([]);
  /* Сортировка по кнопкам  */
  const [option, setOption] = useState(null);
  const [selectedSort, setSelectedSort] = useState({
    price: null,
    roast: null,
  });
  const [tabActive, setTabActive] = useState("all");

  useEffect(() => {
    fetchProducts(null, null, 100).then((data) => {
      let newData = [...data[0]];
      return setCatalogProducts([...catalogProducts, ...newData]);
    });
  }, []);
  useEffect(() => {
    setSortedProducts([...catalogProducts]);
  }, [catalogProducts]);

  /* Кнопки фильтров */
  const filterBtns = [
    {
      img: LightEspresso,
      dataFilter: "BrightEspresso",
      name: "Яркий эспрессо",
    },
    {
      img: BalanceEspresso,
      dataFilter: "BalanceEspresso",
      name: "Сбалансированный эспрессо",
    },
    {
      img: LightFilter,
      dataFilter: "BrightFilter",
      name: "Яркий фильтр",
    },
    {
      img: BalanceFilter,
      dataFilter: "BalanceFilter",
      name: "Сбалансированный фильтр",
    },
    {
      img: Capsule,
      dataFilter: "Capsule",
      name: "Капсулы",
    },
    {
      img: Drip,
      dataFilter: "Drips",
      name: "Дрип-пакеты",
    },
    {
      img: Jar,
      dataFilter: "Jars",
      name: "Кофе в банках",
    },
  ];
  /* Опшен кнопки */
  const optionsButtons = [
    { value: "Для молочных напитков", dataFilter: "forMilk" },
    { value: "Для кофемашины", dataFilter: "forMachine" },
    { value: "Для турки", dataFilter: "forTurk" },
    { value: "Для рожковых кофеварок", dataFilter: "forHorn" },
  ];
  const tabsBtns = [
    {
      name: "Все",
      dataTab: "all",
    },
    {
      name: "Рекомендуем",
      dataTab: "recommend",
    },
    {
      name: "Популярный",
      dataTab: "popular",
    },
    {
      name: "Новый",
      dataTab: "new",
    },
  ];
  /* Сортировка по готовым фильтрам */
  const updateFilters = (filter) => {
    console.log(catalogProducts);
    let filterProducts = null;
    setOption(null);
    switch (filter) {
      case "BrightEspresso":
        filterProducts = catalogProducts.filter(
          (item) => item.acidity >= 50 && item.forWhat == "Для эспрессо"
        );
        console.log(filterProducts);
        return setSortedProducts([...filterProducts]);
      case "BalanceEspresso":
        filterProducts = catalogProducts.filter(
          (item) => item.acidity <= 50 && item.forWhat == "Для эспрессо"
        );
        console.log(filterProducts);
        return setSortedProducts([...filterProducts]);
      case "BrightFilter":
        filterProducts = catalogProducts.filter(
          (item) => item.acidity >= 50 && item.forWhat == "Для фильтра"
        );
        return setSortedProducts([...filterProducts]);
      case "BalanceFilter":
        filterProducts = catalogProducts.filter(
          (item) => item.acidity <= 50 && item.forWhat == "Для фильтра"
        );
        return setSortedProducts([...filterProducts]);
      case "Capsule":
        filterProducts = catalogProducts.filter(
          (item) => item.forWhat == "Капсулы"
        );
        return setSortedProducts([...filterProducts]);
      case "Drips":
        filterProducts = catalogProducts.filter(
          (item) => item.forWhat == "Дрип-пакеты"
        );
        return setSortedProducts([...filterProducts]);
      case "Jars":
        filterProducts = catalogProducts.filter(
          (item) => item.forWhat == "Кофе в банках"
        );
        return setSortedProducts([...filterProducts]);
    }
  };
  /* Сортировка */
  const sortProducts = (optionSelected) => {
    const newProducts = catalogProducts.filter(
      (product) => product[optionSelected]
    );
    setSortedProducts(newProducts);
  };
  /* Клик по ошенам */
  const updateOption = (e) => {
    setOption(e.target.dataset.option);
    sortProducts(e.target.dataset.option);
  };
  /* Сортировка по обжарке */
  const sortRoast = (value, content) => {
    setSelectedSort({ ...selectedSort, roast: `: ${content.toLowerCase()}` });
    let newProducts = [];
    newProducts = sortedProducts.filter((item) => {
      return item.roasted == value;
    });
    return setSortedProducts(newProducts);
  };
  /* Сортировка по цене */
  const sortPrice = (value, content) => {
    setSelectedSort({ ...selectedSort, price: `: ${content.toLowerCase()}` });
    let newProducts = [];

    if (value == "asc") {
      newProducts = sortedProducts.sort((a, b) => a.for250g - b.for250g);
      return setSortedProducts([...newProducts]);
    } else if (value == "desc") {
      newProducts = sortedProducts
        .sort((a, b) => a.for250g - b.for250g)
        .reverse();
      return setSortedProducts([...newProducts]);
    }
  };
  /* Сброс фильтров */
  const resetFilters = () => {
    setSortedProducts([...catalogProducts]);
    setSelectedSort({ price: null, roast: null });
    setOption(null);
  };

  const tabFitlers = (tab) => {
    let newProducts;
    switch (tab) {
      case "all":
        newProducts = catalogProducts
        return setSortedProducts([...newProducts]);
     
      case "recommend":
        newProducts = catalogProducts.filter(
          item => item.rubrics === "Рекомендуем"
        );
        return setSortedProducts([...newProducts]);
      case "popular":
        newProducts = catalogProducts.filter(
          item => item.rubrics == "Популярное"
        );
        return setSortedProducts([...newProducts]);
        case "new":
        newProducts = catalogProducts.filter(
          item => item.rubrics === "Новое"
        );
        return setSortedProducts([...newProducts]);
    } 
    setTabActive(tab);
    
  };
  return (
    <>
      <main>
        <section className="catalog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="catalog__title title">КАТАЛОГ КОФЕ</h1>
                <p className="catalog__subtitle">
                  Выберите вкус и способ приготовления:
                </p>
                <ul className="catalog__filters">
                  {filterBtns.map((item) => {
                    return (
                      <CatalogFilter
                        key={item.name}
                        img={item.img}
                        dataFilter={item.dataFilter}
                        name={item.name}
                        updateFilters={updateFilters}
                      />
                    );
                  })}
                </ul>
                <div className="catalog__sort-wrap">
                  <CustomSelector
                    classes={"catalog__sort-item"}
                    title={"Цена"}
                    changeHandler={sortPrice}
                    valueSelected={selectedSort.price}
                    items={[
                      {
                        value: "asc",
                        text: "По возрастанию",
                      },
                      {
                        value: "desc",
                        text: "По убыванию",
                      },
                    ]}
                  />
                  <CustomSelector
                    classes={"catalog__sort-item"}
                    title={"Степень обжарки"}
                    valueSelected={selectedSort.roast}
                    changeHandler={sortRoast}
                    items={[
                      {
                        value: "light",
                        text: "Светлая",
                      },
                      {
                        value: "average",
                        text: "Средняя",
                      },
                      {
                        value: "dark",
                        text: "Темная",
                      },
                    ]}
                  />
                </div>
                <div className="catalog__options-wrap">
                  <ul className="catalog__options">
                    {optionsButtons.map((btn) => (
                      <li
                        key={btn.dataFilter}
                        className="catalog__options-item"
                      >
                        <CatalogOption
                          dataOption={btn.dataFilter}
                          value={btn.value}
                          onClickHandler={(e) => updateOption(e)}
                          option={option}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="catalog__results-wrap">
                  <p className="catalog__results">
                    Показано сортов:{" "}
                    <span>
                      {sortedProducts.length} из {catalogProducts.length}
                    </span>
                  </p>
                  <button
                    className="catalog__results-reset catalog__results-reset--active"
                    onClick={resetFilters}
                  >
                    Сбросить фильтры
                  </button>
                </div>
                <div className="catalog__wrap">
                  <ul className="catalog__tabs">
                    {tabsBtns.map((item) => {
                      const clasess =
                        item.dataTab === tabActive
                          ? "catalog__tabs-btn catalog__tabs-btn--active"
                          : "catalog__tabs-btn";
                      return (
                        <li key={item.dataTab} className="catalog__tabs-item">
                          <button
                            data-tab={item.dataTab}
                            className={clasess}
                            onClick={(e) => tabFitlers(e.target.dataset.tab)}
                          >
                            {item.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="catalog__list-wrap wrap">
                    <div className="catalog__list">
                      <ul className="catalog-products__list product-card__list">
                        {sortedProducts.length ? (
                          <TransitionGroup component={null}>
                            {sortedProducts.map((item) => {
                              return (
                                <CSSTransition
                                  key={item.name}
                                  timeout={500}
                                  classNames="product"
                                >
                                  <li className="catalog-products__list-item product-card__item">
                                    <ProductCard
                                      rate={item.rate}
                                      comments={item.comments}
                                      tag={item.rubrics}
                                      forW={item.forWhat}
                                      name={item.name}
                                      type={item.types}
                                      img={
                                        process.env.REACT_APP_API_URL + item.img
                                      }
                                      desc={item.description}
                                      acidity={item.acidity}
                                      density={item.density}
                                      for250g={item.for250g}
                                      for1000g={item.for1000g}
                                      id={item.id}
                                    />
                                  </li>
                                </CSSTransition>
                              );
                            })}
                          </TransitionGroup>
                        ) : (
                          <ErrorMsg />
                        )}
                      </ul>
                      <ul className="catalog__pagination">
                        <li className="catalog__pagination-item">
                          <button className="catalog__pagination-btn catalog__pagination-btn--active">
                            1
                          </button>
                        </li>
                        <li className="catalog__pagination-item">
                          <button className="catalog__pagination-btn">2</button>
                        </li>
                        <li className="catalog__pagination-item">
                          <button className="catalog__pagination-btn">3</button>
                        </li>
                      </ul>
                    </div>
                    <ul className="catalog__info">
                      <li className="catalog__info-item">
                        <div className="catalog__info-top">
                          <p className="catalog__info-title">
                            Вернем деньги или заменим,если кофе не понравится
                          </p>
                          <img
                            src={InfoIconFirst}
                            alt="Icon"
                            className="catalog__info-img"
                          />
                        </div>
                        <p className="catalog__info-text">
                          Если кофе вам не понравится — бесплатно заменим или
                          вернем оплату. Это наша гарантия.
                        </p>
                      </li>
                      <li className="catalog__info-item">
                        <div className="catalog__info-top">
                          <p className="catalog__info-title">
                            Обжариваем на лучшем в мире оборудовании
                          </p>
                          <img
                            src={InfoIconSecond}
                            alt="Icon"
                            className="catalog__info-img"
                          />
                        </div>
                        <p className="catalog__info-text">
                          Мы поддерживаем микроклимат на складе для зеленого
                          кофе, используем лучшие в мире ростеры Probat и
                          Loring, проверяем каждую партию кофе лазерными
                          колориметрами Colortrack.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Catalog;
