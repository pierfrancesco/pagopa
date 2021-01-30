import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatesBox from './DatesBox';

describe('<DatesBox />', () => {
  test('it should mount', () => {
    render(<DatesBox />);

    const datesBox = screen.getByTestId('DatesBox');

    expect(datesBox).toBeInTheDocument();
  });
});
