import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './Navigation.module.scss';
import { getIsAuthenticated } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Main
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Phonebook
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
