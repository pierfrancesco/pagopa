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
const ActionBar = ({
  actionBarTitle, filters, setSortBy, setFilterBy,
}) => {
  const [enabledFilters, setEnabledFilters] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    const tempArray = [];
    Object.keys(filters).forEach((elem) => {
      if (elem) {
        tempArray.push({
          name: elem,
          options: Object.keys(filters[elem]),
        });
      }
    });
    setEnabledFilters(tempArray);
  }, [filters]);

  const sendSortToParent = (type) => {
    setSortBy({ field: type, asc });
    setAsc(!asc);
  };

  // TODO: remove this
  const resetSelect = () => {
    setFilterBy({ field: null });
    document.getElementsByTagName('select')[0].selectedIndex = 0;
  };

  return (
    <div className={styles.ActionBar} data-testid="ActionBar">
      <div className={styles.LeftSideContent}>
        {actionBarTitle}
      </div>
      <div className={styles.RightSideContent}>
        <div className={styles.Sort}>
          <span> Sort by: </span>
          <div
            tabIndex="0"
            role="button"
            onKeyPress={() => sendSortToParent('created_at')}
            onClick={() => sendSortToParent('created_at')}
          >
            Create Date
          </div>
          <div
            tabIndex="0"
            role="button"
            onKeyPress={() => sendSortToParent('accepted_at')}
            onClick={() => sendSortToParent('accepted_at')}
          >
            Accepted Date
          </div>
          <div
            tabIndex="0"
            role="button"
            onKeyPress={() => sendSortToParent('updated_at')}
            onClick={() => sendSortToParent('updated_at')}
          >
            Updated Date
          </div>
        </div>
        <div className={styles.Filter}>
          <span> Filters: </span>
          {enabledFilters.map((filter) => (
            <Filter
              key={`key_${filter.name}`}
              name={filter.name}
              options={filter.options}
              setFilterBy={setFilterBy}
            />
          ))}
          <span
            tabIndex="0"
            role="button"
            className={styles.clear}
            onKeyPress={resetSelect}
            onClick={resetSelect}
          >
            Clear
          </span>
        </div>

      </div>
    </div>
  );
};

ActionBar.propTypes = {
  actionBarTitle: PropTypes.string.isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
  setSortBy: PropTypes.func.isRequired,
  setFilterBy: PropTypes.func.isRequired,
};

ActionBar.defaultProps = {};

export default ActionBar;
