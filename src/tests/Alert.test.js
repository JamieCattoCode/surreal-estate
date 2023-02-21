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

  it('does not render the component if message is not truthy', () => {
    const { asFragment } = render(<Alert message="" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot if message is error', () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/error/).textContent).toBe('Error!');
  });

  it('matches snapshot if message is success', () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe('Success!');
  });
});
