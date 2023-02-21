import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower } from '@fortawesome/free-solid-svg-icons';
import '../styles/property-card.css';

const PropertyCard = ({
  title, type, bedrooms, bathrooms, price, city, email,
}) => {
  const emailLink = `mailto:${email}`;
  return (
    <div className="property-card">
      <div className="property-card__title">
        {title}
      </div>
      <div className="property-card__type-city">
        {type}
        {' '}
        -
        {' '}
        {city}
      </div>
      <div className="property-card__bedrooms">
        <FontAwesomeIcon icon={faBed} />
        {bedrooms}
        {' '}
        bedrooms
      </div>
      <div className="property-card__bathrooms">
        <FontAwesomeIcon icon={faShower} />
        {bathrooms}
        {' '}
        bathrooms
      </div>
      <div className="property-card__price">
        £
        {price}
      </div>
      <div className="property-card__email">
        <a href={emailLink}>Contact</a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
