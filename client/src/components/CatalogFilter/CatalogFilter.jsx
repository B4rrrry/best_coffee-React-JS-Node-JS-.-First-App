import React, { useRef } from "react";

const CatalogFilter = (props) => {
  const { img, dataFilter, name,updateFilters} = props;
  const ref = useRef(null);
  const onClickHandler =  () => {
     updateFilters(ref.current.dataset.filter)
  }
  return (
    <>
      <li
        className="catalog__filters-item"
        ref={ref}
        data-filter={dataFilter}
        onClick={() => onClickHandler()}
      >
        <img src={img} alt="Icon" className="catalog__filters-img" />
        <p className="catalog__filters-name">{name}</p>
      </li>
    </>
  );
};

export default CatalogFilter;
