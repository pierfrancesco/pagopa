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
const Card = ({cardInfo}) => (
  <div className={styles.Card} data-testid="Card">
    <InfoBox kind={cardInfo.kind} id={cardInfo.id} story_type={cardInfo.story_type} current_state={cardInfo.current_state} estimate={cardInfo.estimate}/>
    <DetailsBox name={cardInfo.name} owned_by_id={cardInfo.owned_by_id} project_id={cardInfo.project_id} requested_by_id={cardInfo.requested_by_id}/>
    <DatesBox created_at={cardInfo.created_at} accepted_at={cardInfo.accepted_at} updated_at={cardInfo.updated_at} />
    <CtaBox link={cardInfo.url}/>
  </div>
);

Card.propTypes = {
  cardInfo : PropTypes.object.isRequired
};

Card.defaultProps = {};

export default Card;
