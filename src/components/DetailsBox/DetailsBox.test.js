import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsBox from './DetailsBox';

describe('<DetailsBox />', () => {
  test('it should mount', () => {
    render(<DetailsBox />);

    const detailsBox = screen.getByTestId('DetailsBox');

    expect(detailsBox).toBeInTheDocument();
  });
});
