import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatesBox.module.scss';

/**
 *
 * @param created_at
 * @param accepted_at
 * @param updated_at
 * @returns {*}
 * @constructor
 */
const DatesBox = ({created_at, accepted_at, updated_at}) => (
  <div className={styles.DatesBox} data-testid="DatesBox">
    <span>Created:   {created_at}</span>
    <span>Accepted:   {accepted_at}</span>
    <span>Updated:   {updated_at}</span>
  </div>
);

DatesBox.propTypes = {
  created_at : PropTypes.string.isRequired,
  accepted_at : PropTypes.string,
  updated_at : PropTypes.string
};

DatesBox.defaultProps = {};

export default DatesBox;
