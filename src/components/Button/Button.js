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
const Button = ({text = 'Button', onClick}) => (
  <div className={styles.Button} data-testid="Button" onClick={onClick}>
    {text}
  </div>
);

Button.propTypes = {
  text : PropTypes.string.isRequired
};

Button.defaultProps = {};

export default Button;
