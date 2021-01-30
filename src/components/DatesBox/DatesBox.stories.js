/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import DatesBox from './DatesBox';


import storiesMock from '../../assets/storiesMock.json';

const FIRST_STORY = storiesMock[0];

storiesOf('DatesBox', module)
  .add('default', () =>
    <DatesBox
      createdAt={FIRST_STORY.created_at}
      updatedAt={FIRST_STORY.updated_at}
      acceptedAt={FIRST_STORY.accepted_at}
    />);
