import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoBox.module.scss';

import Tag from '../Tag/Tag';

/**
 *
 * @param type
 * @returns {string}
 */
const choseTagColor = (type) => {
  switch (type) {
    case 'feature':
      return 'Violet';
    case 'chore':
      return 'Orange';
    case 'bug':
      return 'Red';
    case 'release':
      return 'Acqua';
    default:
  }
  return '';
};

/**
 *
 * @param mainStoryDetails
 * @returns {*}
 * @constructor
 */
const InfoBox = ({
  kind, id, storyType, currentState, estimate,
}) => (
  <div className={styles.InfoBox} data-testid="InfoBox">
    <div className={styles.Content}>
      <Tag name={kind} />
      <div>
        <span>ID:</span>
        <span className={styles.Label}>{id}</span>
      </div>
    </div>

    <div className={styles.Content}>
      <Tag name={storyType} color={choseTagColor(storyType)} />
    </div>

    <div className={styles.Content}>
      <Tag name={currentState} color="Green" />
      {estimate && (
      <div>
        <span>Estimate:</span>
        <span className={styles.Label}>{estimate}</span>
      </div>
      )}
    </div>

  </div>
);

InfoBox.propTypes = {
  kind: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  storyType: PropTypes.string.isRequired,
  currentState: PropTypes.string.isRequired,
  estimate: PropTypes.string,
};

InfoBox.defaultProps = {
  estimate: null,
};

export default InfoBox;
