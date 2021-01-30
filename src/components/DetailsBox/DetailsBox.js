import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailsBox.module.scss';

const DetailsBox = ({name, project_id, owned_by_id, requested_by_id}) => (
  <div className={styles.DetailsBox} data-testid="DetailsBox">
    <span>Name:{name}</span>
    <span>Project:{project_id}</span>
    <span>Owned By:{owned_by_id}</span>
    <span>Requested by:{requested_by_id}</span>
  </div>
);

DetailsBox.propTypes = {};

DetailsBox.defaultProps = {};

export default DetailsBox;
