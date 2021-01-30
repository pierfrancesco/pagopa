/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Filter from './Filter';

storiesOf('Filter', module)
  .add('default', () =>
    <Filter name={"Test filter"} options={['Test 1', 'Test 2']} setFilterBy={() => alert('Set filter!')}/>
    );
