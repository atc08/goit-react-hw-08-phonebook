import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.scss';

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
      Notifications
    </NavLink>
  </nav>
);

export default Navigation;
