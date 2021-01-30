import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

/**
 *
 * @param name
 * @param options
 * @param setFilterBy
 * @returns {*}
 * @constructor
 */
const Filter = ({name = 'Generic Filter', options = [], setFilterBy}) => {
  return <div className={styles.Filter} data-testid="Filter" key={"filter_" + name}>
    <select name={name} id={name} onChange={(event) => setFilterBy({field: name, value: event.target.value})}>
      <option defaultValue={name} key={"key_" + name}>{name}</option>
      {options.map(option => option !== "undefined" && <option key={"key_" + option} value={option}>{option}</option>)}
    </select>
  </div>
}

Filter.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  setFilterBy : PropTypes.func
};

Filter.defaultProps = {};

export default Filter;
