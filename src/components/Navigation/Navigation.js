import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Main
    </NavLink>

    <NavLink
      to="/todos"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
