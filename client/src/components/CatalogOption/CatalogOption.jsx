import React from "react";

const CatalogOption = (props) => {
  const { value, dataOption, option, onClickHandler } = props;
  /*
   *
   */
  const clazz =
    option == dataOption
      ? "catalog__options-btn  catalog__options-btn--active"
      : "catalog__options-btn";
  return (
    <button className={clazz} data-option={dataOption} onClick={onClickHandler}>
      {value}
    </button>
  );
};

export default CatalogOption;
