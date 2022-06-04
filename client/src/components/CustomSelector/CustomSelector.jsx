import React from "react";
import { useState } from "react";
import { SelectorArrow } from "../../pages/Catalog/CatalogAssets";
const CustomSelector = (props) => {
  const [active, setActive] = useState(false);
  const { classes, items, title, changeHandler,valueSelected} = props;
  const clazz = active
    ? `custom-selector custom-selector--active ${classes}`
    : `custom-selector ${classes}`;
  const onChangeActive = (e) => {
    setActive(!active);
  };
  const onChangeHandler = (e) => {
    const value = `: ${e.target.textContent}`;
    setActive(!active);
    changeHandler(e.target.dataset.value,e.target.textContent)
    
  };

  return (
    <div className={clazz}>
      <div className="custom-selector__top" onClick={(e) => onChangeActive(e)}>
        <p 
        className="custom-selector__value custom-selector__value--selected"
        style={{fontSize: valueSelected != '' && valueSelected !== null ? '14px' : null}}
        >
          {title}{valueSelected}
        </p>
        <img
          src={SelectorArrow}
          alt="Arrow"
          className="custom-selector__arrow"
        />
      </div>
      <ul className="custom-selector__list">
        {items.map((item) => {
          return (
            <li
              key={item.text}
              className="custom-selector__item"
              onClick={(e) => onChangeHandler(e)}
              
            >
              <p className="custom-selector__text" data-value={item.value}>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelector;
