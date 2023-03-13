import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Header.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">
          <Logo fill="#FF6060" className={style.logo} />
        </NavLink>
      </div>
      <nav>
        <ul className={style.homeNav}>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
