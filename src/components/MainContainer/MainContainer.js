import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.scss';

import ActionBar from '../ActionBar/ActionBar';
import Card from '../Card/Card';

/**
 *
 * @param storiesList
 * @returns {*}
 * @constructor
 */
const MainContainer = ({ storiesList = [] }) => {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState({ field: null, asc: false });
  const [filterBy, setFilterBy] = useState({ field: null, value: null });

  let tempStoryList = [];

  const sortByCreatedDate = (a, b, ascOrder) => {
    if (ascOrder) {
      return a.created_at < b.created_at ? -1 : 1;
    }
    return a.created_at < b.created_at ? 1 : -1;
  };
  const sortByAcceptedDate = (a, b, ascOrder) => {
    if (ascOrder) {
      return a.accepted_at < b.accepted_at ? -1 : 1;
    }
    return a.accepted_at < b.accepted_at ? 1 : -1;
  };
  const sortByUpdatedDate = (a, b, ascOrder) => {
    if (ascOrder) {
      return a.updated_at < b.updated_at ? -1 : 1;
    }
    return a.updated_at < b.updated_at ? 1 : -1;
  };

  useEffect(() => {
    const tempFilters = {
      story_type: {},
    };
    storiesList.forEach((story) => {
      tempFilters.story_type[story.story_type] = 1;
    });
    setFilters(tempFilters);
  }, [storiesList]);

  tempStoryList = storiesList;

  // sort by chosen fields
  switch (sortBy.field) {
    case 'created_at':
      tempStoryList = tempStoryList.sort((a, b) => sortByCreatedDate(a, b, sortBy.asc));
      break;
    case 'accepted_at':
      tempStoryList = tempStoryList.sort((a, b) => sortByAcceptedDate(a, b, sortBy.asc));
      break;
    case 'updated_at':
      tempStoryList = tempStoryList.sort((a, b) => sortByUpdatedDate(a, b, sortBy.asc));
      break;
    default:
    // YOLO
  }

  // filter by chosen fields
  switch (filterBy.field) {
    case 'story_type':
      tempStoryList = tempStoryList
        .filter((story) => story.story_type === filterBy.value);
      break;
    case 'owned_by_id':
      tempStoryList = tempStoryList
        .filter((story) => String(story.owned_by_id) === String(filterBy.value));
      break;
    default:
    // YOLO
  }

  return (
    <div className={styles.MainContainer} data-testid="MainContainer">
      <ActionBar actionBarTitle="Stories" filters={filters} setSortBy={setSortBy} setFilterBy={setFilterBy} />
      {
        tempStoryList.map((story) => <Card cardInfo={story} />)
      }
    </div>
  );
};

MainContainer.propTypes = {
  storiesList: PropTypes.instanceOf(Array).isRequired,
};

MainContainer.defaultProps = {};

export default MainContainer;
