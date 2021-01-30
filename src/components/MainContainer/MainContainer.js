import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.scss';

import ActionBar from '../ActionBar/ActionBar';
import Card from '../Card/Card'

/**
 *
 * @param storiesList
 * @returns {*}
 * @constructor
 */
const MainContainer = ({storiesList = []}) => {

  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState({field: null, asc: false});
  let tempStoryList = [];

  const sortByCreatedDate = (a, b, ascOrder) => {
    if (ascOrder) {
      return a.created_at < b.created_at ? -1 : 1;
    } else {
      return a.created_at < b.created_at ? 1 : -1;
    }
  }
  const sortByAcceptedDate = (a, b, ascOrder) => {
    if (ascOrder) {
      return a.accepted_at < b.accepted_at ? -1 : 1;
    } else {
      return a.accepted_at < b.accepted_at ? 1 : -1;
    }
  }
  const sortByUpdatedDate = (a, b, ascOrder) => {
    if (ascOrder) {
      return a.updated_at < b.updated_at ? -1 : 1;
    } else {
      return a.updated_at < b.updated_at ? 1 : -1;
    }
  }

  useEffect(() => {
    const _tempFilters = {
      "story_type": {},
      "owned_by_id": {},
    };
    storiesList.forEach(story => {
      _tempFilters.story_type[story.story_type] = 1;
      _tempFilters.owned_by_id[story.owned_by_id] = 1;
    });
    setFilters(_tempFilters);
  }, []);

  tempStoryList = storiesList;

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
    //YOLO
  }

  return <div className={styles.MainContainer} data-testid="MainContainer">
    <ActionBar actionBarTitle={"Stories"} filters={filters} setSortBy={setSortBy}/>
    {
      tempStoryList.map(story => <Card cardInfo={story}/>)
    }
  </div>
};

MainContainer.propTypes = {
  storiesList: PropTypes.array
};

MainContainer.defaultProps = {};

export default MainContainer;
