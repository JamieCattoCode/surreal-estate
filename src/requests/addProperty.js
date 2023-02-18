import axios from 'axios';

const addProperty = (data, setAlert) => {
  axios
    .post('http://localhost:3000/api/v1/PropertyListing', data)
    .then(() => {
      setAlert({ isSuccess: true, message: 'Property added!' });
    })
    .catch((error) => {
      console.log(error);
      setAlert({ isSuccess: false, message: 'Error occurred.' });
    });
};

export default addProperty;
