/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('default', () =>
  <Card cardInfo={{
    accepted_at: "2017-06-09T12:40:26Z",
    created_at: "2017-06-09T12:40:21Z",
    current_state: "accepted",
    estimate: 2,
    id: 146924107,
    kind: "story",
    name: "Come CIT voglio poter cambiare la mia password SPID accedendo all'IDP dalla schermata delle preferenze",
    owned_by_id: 2922733,
    owner_ids: [2922733],
    project_id: 2048617,
    requested_by_id: 2922733,
    story_type: "feature",
    updated_at: "2018-01-18T21:38:27Z",
    url: "https://www.pivotaltracker.com/story/show/146924107",
  }}/>);
