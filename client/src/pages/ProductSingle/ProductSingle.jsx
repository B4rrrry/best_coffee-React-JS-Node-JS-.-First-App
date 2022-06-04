import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchOneProduct } from "../../http/productsApi";
import { CATALOG, MAIN } from "../../utils/consts";

const ProductSingle = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchOneProduct(params.id).then((data) => setProduct(data[0][0]));
  }, []);
  console.log(params)
  return (
    <main>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-header">
                <ul className="product-header__crumbs">
                  <li className="product-header__crumbs-item">
                    <Link to={MAIN} className="product-header__crumbs-link">
                      Главная
                    </Link>
                  </li>
                  <li className="product-header__crumbs-item">
                    <Link to={CATALOG} className="product-header__crumbs-link">
                      Кофе
                    </Link>
                  </li>
                  <li className="product-header__crumbs-item">
                    <p className="product-header__crumbs-link">
                      Бразилия Серрадо
                    </p>
                  </li>
                </ul>
                <ul className="product-header__info">
                  <li className="product-header__info-item">
                    <svg
                      width="13"
                      className="product-card__info-img product-card__info-img--rate"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_22_5)">
                        <path
                          d="M6.09601 0.189994C6.22101 -0.0630059 6.42501 -0.0630059 6.55001 0.189994L8.12701 3.385C8.20442 3.52122 8.31005 3.63933 8.4368 3.73142C8.56356 3.82351 8.70853 3.88747 8.86201 3.91899L12.388 4.43299C12.668 4.47399 12.731 4.668 12.528 4.865L9.97701 7.35199C9.8712 7.4678 9.79139 7.6049 9.74292 7.75409C9.69446 7.90328 9.67846 8.06111 9.69601 8.21699L10.296 11.728C10.344 12.006 10.178 12.128 9.92801 11.995L6.77901 10.335C6.63624 10.2702 6.48128 10.2367 6.32451 10.2367C6.16774 10.2367 6.01277 10.2702 5.87001 10.335L2.71701 11.993C2.46701 12.124 2.30201 12.004 2.34901 11.726L2.94901 8.215C2.96656 8.05911 2.95056 7.90128 2.90209 7.75209C2.85363 7.6029 2.77382 7.46581 2.66801 7.35L0.119009 4.86299C-0.0809909 4.66299 -0.0199906 4.471 0.259009 4.431L3.78501 3.917C3.93849 3.88547 4.08346 3.82151 4.21021 3.72942C4.33697 3.63733 4.44259 3.51922 4.52001 3.38299L6.09601 0.189994Z"
                          fill="#9D9D9D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_22_5">
                          <rect width="12.648" height="12.048" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="product-card__info-value product-card__info-value--rate">
                      {/*  {rate} */}
                    </p>
                  </li>
                  <li className="product-header__info-item">
                    <svg
                      className="product-card__info-img product-card__info-img--com"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_22_35)">
                        <path
                          d="M1.53107 6.72601V10.983L5.7879 6.72601H1.53107Z"
                          fill="#9D9D9D"
                          stroke="#9D9D9D"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.576 0H1C0.447715 0 0 0.447715 0 1V8.471C0 9.02328 0.447715 9.471 1 9.471H10.576C11.1283 9.471 11.576 9.02328 11.576 8.471V1C11.576 0.447715 11.1283 0 10.576 0Z"
                          fill="#9D9D9D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_22_35">
                          <rect width="11.576" height="11.483" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="product-card__info-value product-card__info-value--comm">
                      {/*  {comments} */}
                    </p>
                  </li>
                  <li className="product-header__info-item">
                    <svg
                      className="product-card__info-img product-card__info-img--fav"
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.16615 13L6.16289 12.0109C2.43649 8.76087 0 6.57065 0 3.88587C0 1.69565 1.71988 0 3.94138 0C5.15963 0 6.37787 0.565217 7.16615 1.4837C7.95443 0.565217 9.17267 0 10.3909 0C12.6124 0 14.3323 1.69565 14.3323 3.88587C14.3323 6.57065 11.8958 8.76087 8.16941 12.0109L7.16615 13Z"
                        fill="#9D9D9D"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="product-header__rubric">{1}</p>
              </div>
              <div className="product-body">
                <img
                  src={process.env.REACT_APP_API_URL + product.img}
                  alt="img"
                  className="product-body__img"
                />
                <div className="product-info">
                  <p className="product-info__for">Для эспрессо</p>
                  <h1 className="product-info__name">{product.name}</h1>
                  <p className="product-info__desc">{product.description}</p>
                  <ul className="product-info__stats-list">
                    <li className="product-info__stats__item">
                      <div className="product-info__stats-line">
                        {
                          <span
                            style={{ width: `${product.acidity}px` }}
                          ></span>
                        }
                      </div>
                      <p className="product-info__stats-name">Кислотность</p>
                    </li>
                    <li className="product-info__stats__item">
                      <div className="product-info__stats-line">
                        <span style={{ width: `${product.density}px` }}></span>
                      </div>
                      <p className="product-info__stats-name">Плотность</p>
                    </li>
                  </ul>
                  <div className="product-info__count">
                    <button className="product-info__count-btn">
                      <span></span>
                    </button>
                    <p className="product-info__count-count">1</p>
                    <button className="product-info__count-btn product-info__count-btn--plus">
                      <span></span>
                    </button>
                  </div>
                  <div className="product-info__bottom">
                    <ul className="product-info__price">
                      <li className="product-info__price-item">
                        <p className="product-info__price-weight">250 Г.</p>
                        <p className="product-info__price-price">
                          {product.for250g} ₽
                        </p>
                      </li>
                      <li className="product-info__price-item">
                        <p className="product-info__price-weight">1000 г.</p>
                        <p className="product-info__price-price">
                          {product.for1000g} ₽
                        </p>
                      </li>
                    </ul>
                    <button className="product-info__buy">
                      <img
                        src="/static/media/buy.af6634c868079904199ffbf3fc954b93.svg"
                        alt="Buy"
                        className="product-info__buy-img"
                      />
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductSingle;
