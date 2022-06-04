import React from "react";
import { Link } from "react-router-dom";
import { CATALOG, MAIN } from "../../utils/consts";
import img from "./error.svg";

const ErrorMsg = () => {
  return (
    <div className="error__wrap">
      <img src={img} alt="Error img" className="error__img" />
      <div className="error__info">
        <p className="error__title">
          ИЗВИНИТЕ, ПО ВАШЕМУ ЗАПРОСУ ТОВАРОВ НЕ НАЙДЕНО
        </p>
        <p className="error__text">
          Измените <span className="error__link">фильтры</span> или перейдите в{" "}
          <Link to={CATALOG}>
            <span className="error__link">каталог</span>
          </Link>{" "}
          или на
          <Link to={MAIN}>
            {" "}
            <span className="error__link">главную страницу</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
