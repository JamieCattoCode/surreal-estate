import React, { useState } from 'react';
import addProperty from '../requests/addProperty';
import '../styles/add-property.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: 'Studio apartment',
      city: 'Manchester',
      type: 'Flat',
      bedrooms: 1,
      bathrooms: 1,
      price: 200000,
      email: 'johnsmith@gmail.com',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAppProperty = (event) => {
    event.preventDefault();
    console.log(fields);
    addProperty(fields);
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="add-property">
      Add Property Page
      <form className="add-property__form" onSubmit={handleAppProperty}>
        <label htmlFor="title">
          Title
          <div className="input-field">
            <input placeholder={initialState.fields.title} type="text" id="title" name="title" value={fields.title} onChange={handleFieldChange} />
          </div>
        </label>
        <label htmlFor="city">
          City
          <div className="input-field">
            <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
        </label>
        <label htmlFor="type">
          Type
          <div className="input-field">
            <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
        </label>
        <label htmlFor="bedrooms">
          Num. Bedrooms
          <div className="input-field">
            <input placeholder={initialState.fields.bedrooms} type="number" id="bedrooms" name="bedrooms" value={fields.bedrooms} onChange={handleFieldChange} />
          </div>
        </label>
        <label htmlFor="bathrooms">
          Num. Bathrooms
          <div className="input-field">
            <input placeholder={initialState.fields.bathrooms} type="number" id="bathrooms" name="bathrooms" value={fields.bathrooms} onChange={handleFieldChange} />
          </div>
        </label>
        <label htmlFor="price">
          Price
          <div className="input-field">
            <input placeholder={initialState.fields.price} type="number" id="price" name="price" value={fields.price} onChange={handleFieldChange} />
          </div>
        </label>
        <label htmlFor="email">
          Email
          <div className="input-field">
            <input placeholder={initialState.fields.email} type="email" id="email" name="email" value={fields.email} onChange={handleFieldChange} />
          </div>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
