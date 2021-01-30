import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoBox from './InfoBox';

describe('<InfoBox />', () => {
  test('it should mount', () => {
    render(<InfoBox />);

    const infoBox = screen.getByTestId('InfoBox');

    expect(infoBox).toBeInTheDocument();
  });
});
