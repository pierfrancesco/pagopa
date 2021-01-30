/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import DetailsBox from './DetailsBox';

import storiesMock from '../../assets/storiesMock.json';

const FIRST_STORY = storiesMock[0];

storiesOf('DetailsBox', module)
  .add('default', () =>
    <DetailsBox
      name={FIRST_STORY.name}
      requestedById={FIRST_STORY.requested_by_id}
      projectId={FIRST_STORY.project_id}
      ownedById={FIRST_STORY.owned_by_id}
    />);
