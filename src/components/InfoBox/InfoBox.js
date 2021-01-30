import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoBox.module.scss';

/**
 *
 * @param mainStoryDetails
 * @returns {*}
 * @constructor
 */
const InfoBox = ({kind, id, story_type, current_state, estimate}) => (
  <div className={styles.InfoBox} data-testid="InfoBox">
    <span>Kind:{kind}</span>
    <span>Id:{id}</span>
    <span>Story Type:{story_type}</span>
    <span>Current State:{current_state}</span>
    <span>Estimate: {estimate}</span>
  </div>
);

InfoBox.propTypes = {
  kind : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  story_type : PropTypes.string.isRequired,
  current_state : PropTypes.string.isRequired,
  estimate : PropTypes.string
};

InfoBox.defaultProps = {};

export default InfoBox;
