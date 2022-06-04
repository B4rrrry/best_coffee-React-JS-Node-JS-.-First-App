import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ACCESSORIES, CATALOG } from "../../utils/consts";
import {
  Video,
  ProductCard,
  CoffeeBg,
  Date,
  Clock,
  CatalogBg,
  AksBg,
  Info1,
  Info2,
  Info3,
  Info4,
  Info5,
  Info6,
  ReviewsLink,
} from "./MainPageAssets";
import { Context } from "../../index";
import { fetchProducts } from "../../http/productsApi";
import SubsForm from "../../components/SubsForm/SubsForm";

const MainPage = () => {
  const { products } = useContext(Context);

  useEffect(() => {
    fetchProducts(null, 4, 2).then((data) => {
      let newWeeks = [...data[0]];
      return setWeeks(newWeeks);
    });
    fetchProducts(null, 1, 4).then((data) => {
      let newNewProd = [...data[0]];
      setNewProd(newNewProd)
    });
    fetchProducts(null, 3, 4).then((data) => {
      let popularProd = [...data[0]];
      setPopularProd(popularProd)
    });
  }, []);

  const [weeks, setWeeks] = useState([]);
  const [newProd, setNewProd] = useState([]);
  const [popularProd, setPopularProd] = useState([]);
  const [filter, setFilter] = useState("New");
  return (
    <main>
      <section className="offer">
        <video
          src={Video}
          loop
          muted
          autoPlay
          playsInline
          className="offer__video"
        ></video>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="offer__title">
                Каждый день мы <span></span> обжариваем кофе
              </h1>
              <p className="offer__subtitle">
                И бесплатно доставляем по всей России
              </p>
              <ul className="offer__filters">
                <li className="offer__filters-item">
                  <Link to={CATALOG} className="offer__filters-link">
                    <svg
                      width="68"
                      className="offer__filters-img"
                      height="52"
                      viewBox="0 0 68 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.87 0.869995V3.17999H31.53C30.72 2.36999 29.6 1.87 28.37 1.87C27.54 1.87 26.71 2.11 25.99 2.56L25.88 2.64C25.3 3.12 24.11 3.87 23.37 3.87C22.4 3.87 21.54 3.32 21.12 2.44L20.85 1.87H5.37C2.89 1.87 0.869995 3.89 0.869995 6.37C0.869995 8.85 2.89 10.87 5.37 10.87H20.85L21.12 10.3C21.54 9.42 22.4 8.87 23.37 8.87C24.12 8.87 25.31 9.62001 25.88 10.1L25.99 10.18C26.71 10.63 27.54 10.87 28.37 10.87C29.46 10.87 30.45 10.47 31.23 9.82001H35.87V11.29L39.46 14.88H42.87V18.88H52.87V14.88H56.28L59.87 11.29V0.880005H35.87V0.869995ZM28.37 8.87C27.93 8.87 27.49 8.74999 27.1 8.50999C26.71 8.19999 24.97 6.87 23.37 6.87C21.87 6.87 20.47 7.64 19.64 8.87H5.37C3.99 8.87 2.87 7.75 2.87 6.37C2.87 4.99 3.99 3.87 5.37 3.87H19.64C20.47 5.1 21.87 5.87 23.37 5.87C24.97 5.87 26.71 4.54 27.1 4.23C27.49 4 27.93 3.87 28.37 3.87C29.75 3.87 30.87 4.99 30.87 6.37C30.87 7.75 29.75 8.87 28.37 8.87ZM32.61 7.81C32.77 7.35 32.87 6.87 32.87 6.36C32.87 5.94 32.79 5.55 32.69 5.17H35.87V7.81H32.61ZM50.87 16.87H44.87V14.87H50.87V16.87ZM57.87 10.45L55.46 12.86H52.87H42.87H40.28L37.87 10.45V2.86H57.87V10.45ZM64.51 33.87H61.6C61.1 32.7 59.93 31.87 58.57 31.87H36.16C34.34 31.87 32.87 33.35 32.87 35.23C33.27 41.45 34.48 51.87 38.16 51.87H56.57C58.41 51.87 59.63 49.26 60.45 45.87H63.5C66.42 45.87 67.52 39.92 67.85 37.36L67.86 37.23C67.87 35.37 66.36 33.87 64.51 33.87ZM35.91 43.73C37.09 43.8 37.84 43.98 38.62 44.17C39.71 44.43 40.83 44.7 43.05 44.7C45.27 44.7 46.4 44.43 47.49 44.17C48.51 43.93 49.48 43.7 51.46 43.7C53.44 43.7 54.41 43.93 55.43 44.17C56.29 44.38 57.19 44.58 58.62 44.66C58.46 45.4 58.3 46.08 58.14 46.68C56.81 46.63 56.04 46.43 55.25 46.23C54.24 45.97 53.19 45.7 51.13 45.7C49.07 45.7 48.02 45.97 47.01 46.23C46.08 46.47 45.2 46.7 43.39 46.7C41.58 46.7 40.7 46.47 39.77 46.23C38.88 46 37.95 45.76 36.33 45.71C36.19 45.1 36.05 44.43 35.91 43.73ZM55.9 42.22C54.81 41.96 53.68 41.69 51.46 41.69C49.24 41.69 48.11 41.96 47.02 42.22C46 42.46 45.03 42.69 43.05 42.69C41.07 42.69 40.1 42.46 39.08 42.22C38.15 42 37.2 41.77 35.57 41.71C35.48 41.12 35.39 40.5 35.31 39.87H59.41C59.28 40.86 59.14 41.79 58.99 42.67C57.58 42.61 56.76 42.42 55.9 42.22ZM36.16 33.87H58.57C59.28 33.87 59.86 34.45 59.86 35.1C59.8 36.05 59.72 36.97 59.63 37.87H35.08C34.99 36.99 34.92 36.09 34.86 35.16C34.87 34.45 35.45 33.87 36.16 33.87ZM56.58 49.87H38.17C37.79 49.87 37.35 49.09 36.9 47.74C37.92 47.82 38.58 47.99 39.27 48.16C40.28 48.42 41.33 48.69 43.39 48.69C45.45 48.69 46.5 48.42 47.51 48.16C48.44 47.92 49.32 47.69 51.13 47.69C52.94 47.69 53.82 47.92 54.75 48.16C55.51 48.36 56.29 48.56 57.5 48.65C57.17 49.43 56.85 49.87 56.58 49.87ZM63.51 43.87H60.87C61.36 41.2 61.65 38.29 61.82 35.87H64.51C65.24 35.87 65.84 36.45 65.87 37.17C65.38 40.78 64.17 43.87 63.51 43.87ZM47.94 28.18C49.56 28.18 50.88 26.79 50.88 25.08C50.88 23.83 49.58 21.87 48.8 20.81C48.74 20.72 48.64 20.63 48.56 20.57C48.11 20.26 47.41 20.37 47.09 20.81C46.31 21.87 45.01 23.84 45.01 25.08C45 26.79 46.32 28.18 47.94 28.18ZM47.93 23.1C48.52 24.05 48.87 24.8 48.87 25.08C48.87 25.69 48.45 26.18 47.93 26.18C47.41 26.18 46.99 25.69 46.99 25.08C47 24.8 47.34 24.05 47.93 23.1Z"
                        fill="black"
                      />
                    </svg>
                    Кофе для эспрессо
                  </Link>
                </li>
                <li className="offer__filters-item">
                  <Link to={CATALOG} className="offer__filters-link">
                    <svg
                      width="36"
                      className="offer__filters-img"
                      height="55"
                      viewBox="0 0 36 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.95 3.67999C27.9 3.52999 26.65 0 20 0C17.68 0 15.51 0.430007 13.56 0.960007C12.66 0.730007 9.65 0 7 0C3.42 0 2.15999 2.45 2.10999 2.55C2.10999 2.56 2.11001 2.57 2.10001 2.58C2.09001 2.6 2.07999 2.61 2.07999 2.62C2.05999 2.67 2.06001 2.72999 2.04001 2.78999C2.03001 2.84999 2.01001 2.90001 2.01001 2.96001C2.01001 2.97001 2 2.98001 2 2.99001C2 2.99001 2 2.99999 2 3.00999V3.02C2 3.19 2.05001 3.47999 2.26001 3.78999L5.45999 10.99H5C4.66 10.99 4.35001 11.16 4.17001 11.44C3.98001 11.72 3.95 12.08 4.09 12.38L7.01001 19.19V21C7.01001 21.55 7.46001 22 8.01001 22H22.01C22.56 22 23.01 21.55 23.01 21V19.21L25.93 12.4C26.06 12.09 26.03 11.74 25.85 11.46C25.66 11.18 25.35 11.01 25.02 11.01H24.56L27.91 4.47C28.01 4.22 28.03 3.93999 27.95 3.67999ZM9.54001 2.2C8.13001 2.65 6.9 3 6 3C5.24 3 4.74001 2.93001 4.42001 2.85001C4.89001 2.45001 5.69 2 7 2C7.83 2 8.71001 2.08 9.54001 2.2ZM21.08 18.61C21.03 18.73 21 18.87 21 19V20H9V19C9 18.86 8.97001 18.73 8.92001 18.61L6.51999 13H7H23.48L21.08 18.61ZM22.29 11H7.64999L4.95999 4.95C5.26999 4.98 5.61 5 6 5C7.4 5 9.07 4.46 11 3.83C13.65 2.97 16.65 2 20 2C23.99 2 25.42 3.37999 25.87 4.00999L22.29 11ZM23 5C23 5.55 22.55 6 22 6C21.45 6 21 5.55 21 5C21 4.45 21.45 4 22 4C22.55 4 23 4.45 23 5ZM19 5C19 5.55 18.55 6 18 6C17.45 6 17 5.55 17 5C17 4.45 17.45 4 18 4C18.55 4 19 4.45 19 5ZM15 5C15 5.55 14.55 6 14 6C13.45 6 13 5.55 13 5C13 4.45 13.45 4 14 4C14.55 4 15 4.45 15 5ZM17 8C17 8.55 16.55 9 16 9C15.45 9 15 8.55 15 8C15 7.45 15.45 7 16 7C16.55 7 17 7.45 17 8ZM21 8C21 8.55 20.55 9 20 9C19.45 9 19 8.55 19 8C19 7.45 19.45 7 20 7C20.55 7 21 7.45 21 8ZM13 8C13 8.55 12.55 9 12 9C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8ZM31.98 37H29.07C28.57 35.83 27.4 35 26.04 35H3.63C1.81 35 0.339996 36.48 0.339996 38.36C0.739996 44.58 1.95 55 5.63 55H24.04C25.88 55 27.1 52.39 27.92 49H30.97C33.89 49 34.99 43.05 35.32 40.49L35.33 40.36C35.34 38.51 33.83 37 31.98 37ZM3.38 46.86C4.56 46.93 5.31 47.11 6.09 47.3C7.18 47.56 8.29999 47.83 10.52 47.83C12.74 47.83 13.87 47.56 14.96 47.3C15.98 47.06 16.95 46.83 18.93 46.83C20.91 46.83 21.88 47.06 22.9 47.3C23.76 47.51 24.66 47.71 26.09 47.79C25.93 48.53 25.77 49.21 25.61 49.81C24.28 49.76 23.51 49.56 22.72 49.36C21.71 49.1 20.66 48.83 18.6 48.83C16.54 48.83 15.49 49.1 14.48 49.36C13.55 49.6 12.67 49.83 10.86 49.83C9.04999 49.83 8.16999 49.6 7.23999 49.36C6.34999 49.13 5.41999 48.89 3.79999 48.84C3.65999 48.23 3.52 47.57 3.38 46.86ZM23.37 45.35C22.28 45.09 21.15 44.82 18.93 44.82C16.71 44.82 15.58 45.09 14.49 45.35C13.47 45.59 12.5 45.82 10.52 45.82C8.53999 45.82 7.56999 45.59 6.54999 45.35C5.61999 45.13 4.67001 44.9 3.04001 44.84C2.95001 44.25 2.86 43.63 2.78 43H26.88C26.75 43.99 26.61 44.92 26.46 45.8C25.06 45.75 24.23 45.55 23.37 45.35ZM3.63 37H26.04C26.75 37 27.33 37.58 27.33 38.23C27.27 39.18 27.19 40.1 27.1 41H2.54999C2.45999 40.12 2.38999 39.22 2.32999 38.29C2.33999 37.58 2.92 37 3.63 37ZM24.05 53H5.64001C5.26001 53 4.81999 52.22 4.37 50.87C5.39 50.95 6.04999 51.12 6.73999 51.29C7.74999 51.55 8.79999 51.82 10.86 51.82C12.92 51.82 13.97 51.55 14.98 51.29C15.91 51.05 16.79 50.82 18.6 50.82C20.41 50.82 21.29 51.05 22.22 51.29C22.98 51.49 23.76 51.69 24.97 51.78C24.64 52.56 24.32 53 24.05 53ZM30.98 47H28.34C28.83 44.33 29.12 41.42 29.29 39H31.98C32.71 39 33.31 39.58 33.34 40.3C32.85 43.92 31.64 47 30.98 47ZM15.41 31.31C17.03 31.31 18.35 29.92 18.35 28.21C18.35 26.96 17.05 25 16.27 23.94C16.21 23.85 16.11 23.76 16.03 23.7C15.58 23.39 14.88 23.5 14.56 23.94C13.78 25 12.48 26.97 12.48 28.21C12.47 29.92 13.79 31.31 15.41 31.31ZM15.41 26.23C16 27.18 16.35 27.93 16.35 28.21C16.35 28.82 15.93 29.31 15.41 29.31C14.89 29.31 14.47 28.82 14.47 28.21C14.47 27.94 14.81 27.18 15.41 26.23Z"
                        fill="black"
                      />
                    </svg>
                    Кофе для фильтра
                  </Link>
                </li>
                <li className="offer__filters-item">
                  <Link to={CATALOG} className="offer__filters-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="offer__filters-img offer__filters-img--acc"
                      viewBox="0 0 48 48"
                    >
                      <defs></defs>
                      <title>Ресурс 5</title>
                      <g id="Слой_2" data-name="Слой 2">
                        <g id="Слой_1-2" data-name="Слой 1">
                          <path
                            className="cls-1"
                            style={{
                              fill: "none",
                              stroke: "#000",
                              strokeLinecap: "round",
                              strokeWidth: "2px",
                              strokeMiterlimit: "10",
                            }}
                            d="M12.11,1h19.6A3.81,3.81,0,0,1,35.5,4.8l4.18,38.41A3.81,3.81,0,0,1,35.89,47h-28a3.8,3.8,0,0,1-3.79-3.79L7.66,10.89"
                          />
                          <path
                            className="cls-2"
                            style={{
                              fill: "none",
                              stroke: "#000",
                              strokeLinecap: "round",
                              strokeWidth: "2px",
                              strokeLinejoin: "round",
                            }}
                            d="M14.59,1H1S3.09,13.55,4.14,20.86c.65,4.58,1,7,1.46,8.22"
                          />
                          <path
                            className="cls-1"
                            style={{
                              fill: "none",
                              stroke: "#000",
                              strokeLinecap: "round",
                              strokeWidth: "2px",
                              strokeMiterlimit: "10",
                            }}
                            d="M36.29,8.32h6.78A3.94,3.94,0,0,1,47,12.25l-1,25.6A3.93,3.93,0,0,1,42,41.77H40.47"
                          />
                        </g>
                      </g>
                    </svg>
                    Аксессуары
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="weeks">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="weeks-wrap wrap">
                <div className="weeks-products">
                  <h2 className="weeks__title title">СОРТА НЕДЕЛИ</h2>
                  <ul className="weeks-products__list product-card__list">
                    {weeks.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="weeks-products__list-item product-card__item"
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
                            id={item.id}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="weeks-articles">
                  <h2 className="weeks-articles__title title">Журнал о кофе</h2>
                  <p className="weeks-articles__subtitle">
                    Мы публикуем полезные статьи о кофе и делимся накопленными
                    знаниями
                  </p>
                  <article className="article weeks-articles__item">
                    <a href="#" className="article__link">
                      <img src={CoffeeBg} alt="Bg" className="article__bg" />
                      <p className="article__name">
                        ОБЩИЕ РЕКОМЕНДАЦИИ ПО ПРИГОТОВЛЕНИЮ КОФЕ
                      </p>
                      <p className="article__mdesc">
                        Прежде чем готовить кофе, стоит узнать об основных
                        факторах, которые влияют на его вкус.
                      </p>
                      <ul className="article__info">
                        <li className="article__info-item">
                          <img
                            src={Date}
                            alt="Date"
                            className="article__info-img"
                          />
                          <p className="article__info-text">05 мая 2022</p>
                        </li>
                        <li className="article__info-item">
                          <img
                            src={Clock}
                            alt="Time"
                            className="article__info-img"
                          />
                          <p className="article__info-text">
                            12 мин. на чтение
                          </p>
                        </li>
                      </ul>
                    </a>
                  </article>
                  <article className="article weeks-articles__item">
                    <a href="#" className="article__link">
                      <img src={CoffeeBg} alt="Bg" className="article__bg" />
                      <p className="article__name">
                        ОБЩИЕ РЕКОМЕНДАЦИИ ПО ПРИГОТОВЛЕНИЮ КОФЕ
                      </p>
                      <p className="article__mdesc">
                        Прежде чем готовить кофе, стоит узнать об основных
                        факторах, которые влияют на его вкус.
                      </p>
                      <ul className="article__info">
                        <li className="article__info-item">
                          <img
                            src={Date}
                            alt="Date"
                            className="article__info-img"
                          />
                          <p className="article__info-text">05 мая 2022</p>
                        </li>
                        <li className="article__info-item">
                          <img
                            src={Clock}
                            alt="Time"
                            className="article__info-img"
                          />
                          <p className="article__info-text">
                            12 мин. на чтение
                          </p>
                        </li>
                      </ul>
                    </a>
                  </article>
                  <a href="#" className="weeks-articles__link">
                    Все статьи
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filters">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filters__btns">
                <li className="filters__btns-item">
                  <button
                    data-filter="New"
                    className={
                      filter == "New"
                        ? "filters__btns-btn filters__btns-btn--active"
                        : "filters__btns-btn"
                    }
                    onClick={(e) => setFilter(e.target.dataset.filter)}
                  >
                    Новое
                  </button>
                </li>
                <li className="filters__btns-item">
                  <button
                    data-filter="Popular"
                    className={
                      filter == "Popular"
                        ? "filters__btns-btn filters__btns-btn--active"
                        : "filters__btns-btn"
                    }
                    onClick={(e) => setFilter(e.target.dataset.filter)}
                  >
                    Популярное
                  </button>
                </li>
              </ul>
              <div className="filters-wrap wrap">
                <div className="filters-products">
                  <ul
                    style={{ display: filter == "New" ? "flex" : "none" }}
                    className="filters-products__list product-card__list"
                  >
                    {newProd.map((item) => {

                      return (
                        <li
                          key={item.id}
                          className="filters-products__list-item product-card__item"
                        >
                          <ProductCard
                            rate={item.rate}
                            comments={item.comments}
                            tag={item.rubrics}
                            forW={item.forWhat}
                            name={item.name}
                            type={item.types}
                            img={process.env.REACT_APP_API_URL + item.img}
                            desc={item.desc}
                            acidity={item.acidity}
                            density={item.density}
                            for250g={item.for250g}
                            for1000g={item.for1000g}
                            id={item.id}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <ul
                    style={{ display: filter == "Popular" ? "flex" : "none" }}
                    className="filters-products__list product-card__list"
                  >
                    {popularProd.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="filters-products__list-item product-card__item"
                        >
                          <ProductCard
                            rate={item.rate}
                            comments={item.comments}
                            tag={item.rubrics}
                            forW={item.forWhat}
                            name={item.name}
                            type={item.types}
                            img={process.env.REACT_APP_API_URL + item.img}
                            desc={item.desc}
                            acidity={item.acidity}
                            density={item.density}
                            for250g={item.for250g}
                            for1000g={item.for1000g}
                            
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="filters-catalog">
                  <Link to={CATALOG} className="filters-catalog__item">
                    <img
                      src={CatalogBg}
                      alt="bg"
                      className="filters-catalog__bg"
                    />
                    <h2 className="filters-catalog__title">Каталог кофе</h2>
                    <p className="filters-catalog__subtitle">
                      Более 50 сортов свежеобжаренного кофе для всех способов
                      приготовления
                    </p>
                  </Link>
                  <Link to={ACCESSORIES} className="filters-catalog__item">
                    <img src={AksBg} alt="bg" className="filters-catalog__bg" />
                    <h2 className="filters-catalog__title">
                      Аксессуары для кофе
                    </h2>
                    <p className="filters-catalog__subtitle">
                      Все, что нужно, чтобы приготовить вкусный кофе дома
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="info__list">
                <li className="info__list-item">
                  <img src={Info1} alt="icon" className="info__list-img" />
                  <p className="info__list-title">
                    Бесплатно <span></span> доставляем
                  </p>
                  <p className="info__list-text">
                    Отправляем кофе в день обжарки в любой город.Доставка почтой
                    России бесплатна всегда (кромеудаленных регионов).
                    Возможность бесплатной доставки курьером или до пункта
                    выдачи рассчитывается автоматически в корзине и зависит от
                    суммы и веса заказа.
                  </p>
                </li>
                <li className="info__list-item">
                  <img src={Info2} alt="icon" className="info__list-img" />
                  <p className="info__list-title">
                    Жарим и отправляем <span></span> кофе каждый день
                  </p>
                  <p className="info__list-text">
                    Жарим кофе семь дней в неделю, отправляем на следующий день
                    после заказа, чтобы вы получали максимально свежий кофе.
                  </p>
                </li>
                <li className="info__list-item">
                  <img src={Info3} alt="icon" className="info__list-img" />
                  <p className="info__list-title">
                    Вернем деньги или заменим, <span></span> если кофе не
                    понравится
                  </p>
                  <p className="info__list-text">
                    Если кофе вам не понравится — бесплатно заменим или вернем
                    оплату. Это наша гарантия.
                  </p>
                </li>
                <li className="info__list-item">
                  <img src={Info4} alt="icon" className="info__list-img" />
                  <p className="info__list-title">
                    Дарим подарки <span></span> и делаем скидки
                  </p>
                  <p className="info__list-text">
                    За каждые 1000 рублей в заказе вы получаете +1% к
                    накопительной скидке на следующие заказы. Максимальная
                    скидка — 15%. Кроме того, мы дарим кофе, чай или аксессуар
                    при покупке 6 пачек кофе по 250 г.
                  </p>
                </li>
                <li className="info__list-item">
                  <img src={Info5} alt="icon" className="info__list-img" />
                  <p className="info__list-title">
                    Сильная <span></span> команда
                  </p>
                  <p className="info__list-text">
                    В нашей команде Q-грейдеры, призеры чемпионатов,
                    национальные судьи вкуса, сертифицированные SCA
                    профессионалы (Roasting, Sensory, Green Coffee, Brewing,
                    Barista).
                  </p>
                </li>
                <li className="info__list-item">
                  <img src={Info6} alt="icon" className="info__list-img" />
                  <p className="info__list-title">
                    Обжариваем на лучшем <span></span> в мире оборудовании
                  </p>
                  <p className="info__list-text">
                    Мы поддерживаем микроклимат на складе для зеленого кофе,
                    используем лучшие в мире ростеры Probat и Loring, проверяем
                    каждую партию кофе лазерными колориметрами Colortrack. А
                    после обжарки дополнительно очищаем с помощью специального
                    оптического колорсортера Sovda.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="reviews__title title">ОТЗЫВЫ</h2>
              <p className="reviews__subtitle">
                Мы публикуем все отзывы без исключения — именно ваша обратная
                связь помогает нам становиться лучше.
              </p>
              <ul className="reviews__list">
                <li className="reviews__list-item">
                  <p className="reviews__list-info">
                    Гульнара Хамматова, <span>г. Уфа</span>
                  </p>
                  <p className="reviews__list-text">
                    Консультация по телефону, красивая упаковка товара
                  </p>
                </li>
                <li className="reviews__list-item">
                  <p className="reviews__list-info">
                    Гульнара Хамматова, <span>г. Уфа</span>
                  </p>
                  <p className="reviews__list-text">
                    Консультация по телефону, красивая упаковка товара
                  </p>
                </li>
                <li className="reviews__list-item">
                  <p className="reviews__list-info">
                    Гульнара Хамматова, <span>г. Уфа</span>
                  </p>
                  <p className="reviews__list-text">
                    Консультация по телефону, красивая упаковка товара
                  </p>
                </li>
                <li className="reviews__list-item">
                  <p className="reviews__list-info">
                    Гульнара Хамматова, <span>г. Уфа</span>
                  </p>
                  <p className="reviews__list-text">
                    Консультация по телефону, красивая упаковка товара
                  </p>
                </li>
                <li className="reviews__list-item">
                  <p className="reviews__list-info">
                    Гульнара Хамматова, <span>г. Уфа</span>
                  </p>
                  <p className="reviews__list-text">
                    Консультация по телефону, красивая упаковка товара
                  </p>
                </li>
                <li className="reviews__list-item">
                  <p className="reviews__list-info">
                    Гульнара Хамматова, <span>г. Уфа</span>
                  </p>
                  <p className="reviews__list-text">
                    Консультация по телефону, красивая упаковка товара
                  </p>
                </li>
              </ul>
              <a href="#" className="reviews__link">
                <img
                  src={ReviewsLink}
                  alt="Icon"
                  className="reviews__link-img"
                />
                Посмотреть все отзывы
              </a>
            </div>
          </div>
        </div>
      </section>
      <SubsForm />
    </main>
  );
};

export default MainPage;
