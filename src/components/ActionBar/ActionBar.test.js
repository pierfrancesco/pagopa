import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionBar from './ActionBar';

describe('<ActionBar />', () => {
  test('it should mount', () => {
    render(<ActionBar />);

    const actionBar = screen.getByTestId('ActionBar');

    expect(actionBar).toBeInTheDocument();
  });
});
