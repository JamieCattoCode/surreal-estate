/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import '../styles/properties.css';

const Properties = () => {
  const initialState = {
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data }) => {
        setProperties(data);
      })
      .catch((err) => {
        setAlert({
          message: 'Failed to return properties',
          isSuccess: false,
        });
      });
  });

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          {...property}
        />
      ))}
    </div>
  );
};

export default Properties;
