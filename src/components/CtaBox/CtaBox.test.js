import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CtaBox from './CtaBox';

describe('<CtaBox />', () => {
  test('it should mount', () => {
    render(<CtaBox />);

    const ctaBox = screen.getByTestId('CtaBox');

    expect(ctaBox).toBeInTheDocument();
  });
});
