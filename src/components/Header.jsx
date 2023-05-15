import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import style from '../styles/Header.module.css';

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
