import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatesBox.module.scss';

/**
 *
 * @param createdAt
 * @param acceptedAt
 * @param updatedAt
 * @returns {*}
 * @constructor
 */
const DatesBox = ({ createdAt, acceptedAt, updatedAt }) => (
  <div className={styles.DatesBox} data-testid="DatesBox">
    <div>
      <span className={styles.Label}>Created:</span>
      <span className="Value">{createdAt}</span>
    </div>
    <div>
      <span className={styles.Label}>Accepted:</span>
      <span className="Value">{acceptedAt}</span>
    </div>
    <div>
      <span className={styles.Label}>Updated:</span>
      <span className="Value">{updatedAt}</span>
    </div>
  </div>
);

DatesBox.propTypes = {
  createdAt: PropTypes.string.isRequired,
  acceptedAt: PropTypes.string,
  updatedAt: PropTypes.string,
};

DatesBox.defaultProps = {
  acceptedAt: null,
  updatedAt: null,
};

export default DatesBox;
