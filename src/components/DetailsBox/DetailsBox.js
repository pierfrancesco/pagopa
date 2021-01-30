import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailsBox.module.scss';
import Tag from '../Tag/Tag'

const DetailsBox = ({name, project_id, owned_by_id, requested_by_id}) => (
  <div className={styles.DetailsBox} data-testid="DetailsBox">
    <div className={styles.Content}>
      <span className={"Label"}>Project:{project_id}</span>
      <span>Owned By:{owned_by_id}</span>
      <span>Requested by:{requested_by_id}</span>
    </div>
    <div className={styles.Description}>
      <span>{name}</span>
    </div>
  </div>
);

DetailsBox.propTypes = {
  name : PropTypes.string.isRequired,
  project_id : PropTypes.string.isRequired,
  owned_by_id: PropTypes.string.isRequired,
  requested_by_id: PropTypes.string.isRequired
};

DetailsBox.defaultProps = {};

export default DetailsBox;
