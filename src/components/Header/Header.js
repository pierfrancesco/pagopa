import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const Header = ({title = 'Header Component'}) => (
  <div className={styles.Header} data-testid="Header">
    <div className={styles.AppName}>
      {title}
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {};

export default Header;
