import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/signup"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      SignUp
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
