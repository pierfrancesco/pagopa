import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.scss';

/**
 *
 * @param name
 * @param color
 * @returns {*}
 * @constructor
 */
const Tag = ({ name, color }) => (
  <div className={`${styles.Tag} ${color ? styles[color] : ''}`} data-testid="Tag">
    {name}
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Tag.defaultProps = {
  color: null,
};

export default Tag;
