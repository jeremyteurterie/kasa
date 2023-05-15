import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import style from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={style.container}>
      <Logo fill="white" className={style.logo} />
      <span className={style.rights}>© 2020 Kasa. All rights reserved</span>
    </div>
  );
};

export default Footer;
