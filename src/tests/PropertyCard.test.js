import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

describe('PropertyCard component', () => {
  const validProps = {
    title: '2 bed flat',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 3,
    price: 150000,
    city: 'Manchester',
    email: 'jamie@surrealestate.com',
  };
  const { asFragment } = render(
    <PropertyCard
      title={validProps.title}
      type={validProps.type}
      bedrooms={validProps.bedrooms}
      bathrooms={validProps.bathrooms}
      price={validProps.price}
      city={validProps.city}
      email={validProps.email}
    />,
  );

  it('renders a property card correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct value for props', () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />,
    );
    expect(getByText(/2 bed flat/i)).toHaveClass('property-card__title');
    expect(getByText(/apartment/i)).toHaveClass('property-card__type-city');
    expect(getByText(/manchester/i)).toHaveClass('property-card__type-city');
    expect(getByText(/2 bedrooms/i)).toHaveClass('property-card__bedrooms');
    expect(getByText(/3 bathrooms/i)).toHaveClass('property-card__bathrooms');
    expect(getByText(/£150000/i)).toHaveClass('property-card__price');
  });
});
