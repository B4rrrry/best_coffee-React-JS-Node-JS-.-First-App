import React from "react";
import { InfoIconFirst, InfoIconSecond, SelectorArrow } from "../Catalog/CatalogAssets";
import { ProductCard } from "../MainPage/MainPageAssets";
import { Access, Barista, Filters, Grinders, Scales, Syrups } from "./AccessoriesAssets";
const Accessories = () => {
  return (
    <>
      <main>
        <section className="catalog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="catalog__title title">Аксессуары</h1>
                <p className="catalog__subtitle">Выберите раздел аксессуаров:</p>
                <ul className="catalog__filters">
                  <li className="catalog__filters-item">
                    <img
                      src={Filters}
                      alt="Icon"
                      className="catalog__filters-img"
                    />
                    <p className="catalog__filters-name">Фильтры</p>
                  </li>
                  <li className="catalog__filters-item">
                    <img
                      src={Grinders}
                      alt="Icon"
                      className="catalog__filters-img"
                    />
                    <p className="catalog__filters-name">Кофемолки</p>
                  </li>
                  <li className="catalog__filters-item">
                    <img
                      src={Scales}
                      alt="Icon"
                      className="catalog__filters-img"
                    />
                    <p className="catalog__filters-name">Весы</p>
                  </li>
                  <li className="catalog__filters-item">
                    <img
                      src={Access}
                      alt="Icon"
                      className="catalog__filters-img"
                    />
                    <p className="catalog__filters-name">
                      Аксессуары для заваривания
                    </p>
                  </li>
                  <li className="catalog__filters-item">
                    <img
                      src={Barista}
                      alt="Icon"
                      className="catalog__filters-img"
                    />
                    <p className="catalog__filters-name">Аксессуары для бариста</p>
                  </li>
                  <li className="catalog__filters-item">
                    <img
                      src={Syrups}
                      alt="Icon"
                      className="catalog__filters-img"
                    />
                    <p className="catalog__filters-name">Сиропы</p>
                  </li>
                </ul>
                <div className="catalog__sort-wrap">
                  <div className="custom-selector custom-selector--active catalog__sort-item">
                    <div className="custom-selector__top">
                      <p className="custom-selector__value custom-selector__value--selected">
                        Цена: По возрастанию
                      </p>
                      <img
                        src={SelectorArrow}
                        alt="Arrow"
                        className="custom-selector__arrow"
                      />
                    </div>
                    <ul className="custom-selector__list">
                      <li className="custom-selector__item">
                        <p className="custom-selector__text">По возрастанию</p>
                      </li>
                      <li className="custom-selector__item">
                        <p className="custom-selector__text">По убыванию</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="catalog__results-wrap">
                  <p className="catalog__results">
                    Показано аксессуаров: <span>86 из 86</span>
                  </p>
                  <button className="catalog__results-reset catalog__results-reset--active">
                    Сбросить фильтры
                  </button>
                </div>
                <div className="catalog__wrap">
                  <ul className="catalog__tabs">
                    <li className="catalog__tabs-item">
                      <button className="catalog__tabs-btn catalog__tabs-btn--active">
                        Все
                      </button>
                    </li>
                    <li className="catalog__tabs-item">
                      <button className="catalog__tabs-btn">Рекомендуем</button>
                    </li>
                    <li className="catalog__tabs-item">
                      <button className="catalog__tabs-btn">Популярный</button>
                    </li>
                    <li className="catalog__tabs-item">
                      <button className="catalog__tabs-btn">Новый</button>
                    </li>
                  </ul>
                  <div className="catalog__list-wrap wrap">
                    <div className="catalog__list">
                      <ul className="catalog-products__list product-card__list">
                        <li className="catalog-products__list-item product-card__item">
                          <ProductCard />
                        </li>
                        <li className="catalog-products__list-item product-card__item">
                          <ProductCard />
                        </li>
                        <li className="catalog-products__list-item product-card__item">
                          <ProductCard />
                        </li>
                        <li className="catalog-products__list-item product-card__item">
                          <ProductCard />
                        </li>
                        <li className="catalog-products__list-item product-card__item">
                          <ProductCard />
                        </li>
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

export default Accessories;
