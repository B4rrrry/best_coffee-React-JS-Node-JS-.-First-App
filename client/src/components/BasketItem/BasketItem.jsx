import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../..";
import { deleteProd, updatePriceAndCount } from "../../http/basketApi";
import { PRODUCT_SINGLE } from "../../utils/consts";
const BasketItem = (props) => {
  const { productId, img, name, count, sum, weight, setUpdate } = props;
  const history = useHistory();
  const priceForOne = sum / count;
  const { user } = useContext(Context);
  const [info, setInfo] = useState({
    count: Number(count),
    price: Number(sum),
  });

  const onChangeCount = async (event, value) => {
    event.preventDefault();
    if (info.count + value > 0) {
      setInfo({
        count: info.count + value,
        price: info.price + priceForOne * value,
      });
      user.setTotalSum(Number(user.totalSum) + priceForOne);
      let formData = new FormData();
      formData.append("productId", productId);
      formData.append("basketId", user.basketId);
      formData.append("weight", weight);
      formData.append("price", info.price + priceForOne * value);
      formData.append("count", info.count + value);
      updatePriceAndCount(formData).then((data) => {
        console.log(data);
      });
      console.log(productId);
      setUpdate(true);
    }
  };
  const onDeleteHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    console.log(productId);
    formData.append("productId", productId);
    formData.append("basketId", user.basketId);
    formData.append("weight", weight);

    deleteProd(formData).then((data) => {
      setUpdate(true);
    });
  };

  return (
    <li key={productId} className="basket__list-item">
      <img
        src={process.env.REACT_APP_API_URL + img}
        alt="Img"
        className="basket__list-img"
      />
      <div className="basket__list-info">
        <div className="basket__list-top">
          <Link to={PRODUCT_SINGLE + productId} className="basket__list-name">
            {" "}
            {name}
          </Link>
          <div className="basket__list-count-wrap">
            <button
              className="basket__list-count basket__list-count--min"
              onClick={(event) => onChangeCount(event, -1)}
            >
              <span></span>
            </button>
            <p className="basket__list-count-value">{info.count}</p>
            <button
              className="basket__list-count basket__list-count--plus"
              onClick={(event) => onChangeCount(event, +1)}
            >
              <span></span>
            </button>
          </div>
          <p className="basket__list-price">
            <span>{info.price}</span> ₽
          </p>
        </div>
        <div className="basket__list-body">
          <p className="basket__list-weight">{weight} г.</p>
          <button
            className="basket__list-del"
            onClick={(e) => onDeleteHandler(e)}
          >
            Удалить
          </button>
        </div>
      </div>
    </li>
  );
};

export default BasketItem;
