/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContainer from './MainContainer';

import storiesMock from '../../assets/storiesMock.json';

storiesOf('MainContainer', module).add('default', () => <MainContainer storiesList={storiesMock}/>);
