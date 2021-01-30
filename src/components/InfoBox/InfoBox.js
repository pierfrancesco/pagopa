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
      return "Violet";
    case 'chore':
      return "Orange"
    case 'bug':
      return "Red";
    case 'release':
      return "Acqua"
    default:
  }
  return '';
}

/**
 *
 * @param mainStoryDetails
 * @returns {*}
 * @constructor
 */
const InfoBox = ({kind, id, story_type, current_state, estimate}) => (
  <div className={styles.InfoBox} data-testid="InfoBox">
    <div className={styles.Content}>
      <Tag name={kind}/>
      <div>
        <span >ID:</span>
        <span className={styles.Label}>{id}</span>
      </div>
    </div>

    <div className={styles.Content}>
      <Tag name={story_type} color={choseTagColor(story_type)}/>
    </div>


    <div className={styles.Content}>
      <Tag name={current_state} color={"Green"}/>
      {estimate && <div>
        <span >Estimate:</span>
        <span className={styles.Label}>{estimate}</span>
      </div>}
    </div>

  </div>
);

InfoBox.propTypes = {
  kind: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  story_type: PropTypes.string.isRequired,
  current_state: PropTypes.string.isRequired,
  estimate: PropTypes.string
};

InfoBox.defaultProps = {};

export default InfoBox;
