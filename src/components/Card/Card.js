import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

import InfoBox from '../InfoBox/InfoBox';
import DetailsBox from '../DetailsBox/DetailsBox';
import DatesBox from '../DatesBox/DatesBox';
import CtaBox from '../CtaBox/CtaBox';

/**
 *
 * @param cardInfo
 * @returns {*}
 * @constructor
 */
const Card = ({ cardInfo }) => (
  <div className={styles.Card} data-testid="Card">
    <InfoBox
      kind={cardInfo.kind}
      id={cardInfo.id}
      storyType={cardInfo.story_type}
      currentState={cardInfo.current_state}
      estimate={cardInfo.estimate}
    />

    <DetailsBox
      name={cardInfo.name}
      ownedById={cardInfo.owned_by_id}
      projectId={cardInfo.project_id}
      requestedById={cardInfo.requested_by_id}
    />

    <DatesBox
      createdAt={cardInfo.created_at}
      acceptedAt={cardInfo.accepted_at}
      updatedAt={cardInfo.updated_at}
    />

    <CtaBox link={cardInfo.url} />
  </div>
);

Card.propTypes = {
  cardInfo: PropTypes.instanceOf(Object).isRequired,
};

Card.defaultProps = {};

export default Card;
