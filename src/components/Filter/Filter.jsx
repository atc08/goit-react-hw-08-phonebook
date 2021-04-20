import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      <p className={s.FilterText}>Find contacts by name :</p>
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Enter name for search"
        className={s.FilterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;
