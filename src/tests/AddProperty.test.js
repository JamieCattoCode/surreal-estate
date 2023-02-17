import React from 'react';
import { render, screen } from '@testing-library/react';
import AddProperty from '../components/AddProperty';

test('renders learn react link', () => {
  render(<AddProperty />);
  const linkElement = screen.getByText(/add property/i);
  expect(linkElement).toBeInTheDocument();
});
