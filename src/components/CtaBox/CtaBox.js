import React from 'react';
import PropTypes from 'prop-types';
import styles from './CtaBox.module.scss';
import Button from '../Button/Button';

/**
 *
 * @param link
 * @returns {*}
 * @constructor
 */
const CtaBox = ({ link }) => (
  <div className={styles.CtaBox} data-testid="CtaBox">
    <Button text="Open" onClick={() => window.open(link)} />
  </div>
);

CtaBox.propTypes = {
  link: PropTypes.string.isRequired,
};

CtaBox.defaultProps = {};

export default CtaBox;
