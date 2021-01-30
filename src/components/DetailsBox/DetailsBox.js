import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailsBox.module.scss';

const DetailsBox = ({
  name, projectId, ownedById, requestedById,
}) => (
  <div className={styles.DetailsBox} data-testid="DetailsBox">
    <div className={styles.Content}>
      <span className="Label">
        Project:
        {projectId}
      </span>
      <span>
        Owned By:
        {ownedById}
      </span>
      <span>
        Requested by:
        {requestedById}
      </span>
    </div>
    <div className={styles.Description}>
      <span>{name}</span>
    </div>
  </div>
);

DetailsBox.propTypes = {
  name: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  ownedById: PropTypes.string.isRequired,
  requestedById: PropTypes.string.isRequired,
};

DetailsBox.defaultProps = {};

export default DetailsBox;
