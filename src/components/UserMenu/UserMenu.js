import React from 'react';
import { connect } from 'react-redux';
import { getUserName, logOut } from '../../redux/auth';
import s from './UserMenu.module.scss';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      LogOut
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
