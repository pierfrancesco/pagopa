import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.module.scss';

import Filter from '../Filter/Filter';

/**
 *
 * @param actionBarTitle
 * @param filters
 * @param setSortBy
 * @param setFilterBy
 * @returns {*}
 * @constructor
 */
const ActionBar = ({actionBarTitle = 'ActionBar Title', filters = {}, setSortBy = () => {}, setFilterBy}) => {

  const [enabledFilters, setEnabledFilters] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    let _tempArray = [];
    Object.keys(filters).forEach(elem => {
      if (elem) {
        _tempArray.push({
          name: elem,
          options: Object.keys(filters[elem])
        });
      }
    });
    setEnabledFilters(_tempArray);
  }, [filters])

  const sendSortToParent = (type) => {
    setSortBy({field: type, asc: asc});
    setAsc(!asc);
  }


  return <div className={styles.ActionBar} data-testid="ActionBar">
    <div className={styles.LeftSideContent}>
      {actionBarTitle}
    </div>
    <div className={styles.RightSideContent}>
      <div className={styles.Sort}>
        <span> Sort by: </span>
        <div onClick={() => sendSortToParent('created_at')}>Create Date</div>
        <div onClick={() => sendSortToParent('accepted_at')}>Accepted Date</div>
        <div onClick={() => sendSortToParent('updated_at')}>Updated Date</div>
      </div>
      <div className={styles.Filter}>
        <span> Filters: </span>
        {enabledFilters.map(filter => <Filter key={"key_" + filter.name} name={filter.name} options={filter.options} setFilterBy={setFilterBy}/>)}
        <span onClick={()=> setFilterBy({field:null})}>Clear</span>
      </div>

    </div>
  </div>
}

ActionBar.propTypes = {
  actionBarTitle: PropTypes.string,
  filters: PropTypes.object,
  setSortBy: PropTypes.func
};

ActionBar.defaultProps = {};

export default ActionBar;
