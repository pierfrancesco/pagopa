/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoBox from './InfoBox';
import storiesMock from '../../assets/storiesMock.json';

const FIRST_STORY = storiesMock[0];

storiesOf('InfoBox', module)
  .add('default', () =>
    <InfoBox
      currentState={FIRST_STORY.current_state}
      storyType={FIRST_STORY.story_type}
      kind={FIRST_STORY.kind}
      id={FIRST_STORY.id}
      estimate={FIRST_STORY.estimate}
    />
  );
