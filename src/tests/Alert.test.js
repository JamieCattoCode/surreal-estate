import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert component', () => {
  it('displays an error message for a failed action', () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/error/i).textContent).toBe('Error!');
  });

  it('displays a success message for a successful action', () => {
    const { getByText } = render(<Alert message="Success!!!" success />);
    expect(getByText(/success/i).textContent).toBe('Success!!!');
  });
});
