import React from 'react';
import { useState } from 'react';
import style from '../styles/Dropdown.module.css';

const DropDown = ({ title, paragraphe, wrapClassName }) => {
  // the initial value (isOpen) is false
  const [isOpen, setIsOpen] = useState(false);

  // click event handler -> turns initial value to be 'true'
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const display = isOpen ? 'block' : 'none';
  const arrowDirection = isOpen ? 'down' : 'up';

  return (
    <div
      className={`${style.dropdownWrap} ${wrapClassName}`}
      onClick={handleOnClick}
    >
      <div className={style.dropdownHeader}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${arrowDirection}`} />
      </div>
      <div className={style.dropdownBox} style={{ display }}>
        <span className={style.paragraphe}>{paragraphe}</span>
      </div>
    </div>
  );
};

export default DropDown;
