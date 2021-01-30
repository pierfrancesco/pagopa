import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 *
 * @param text
 * @param onClick
 * @returns {*}
 * @constructor
 */
const Button = ({ text, onClick }) => (
  <div
    className={styles.Button}
    data-testid="Button"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex="0"
  >
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
