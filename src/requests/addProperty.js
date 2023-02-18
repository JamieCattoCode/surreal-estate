import axios from 'axios';

const addProperty = (data) => {
  axios
    .post('http://localhost:3000/api/v1/PropertyListing', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default addProperty;
