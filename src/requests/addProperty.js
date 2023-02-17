import axios from 'axios';

const addProperty = (data) => {
  axios
    .post('http://localhost:3000/api/v1/PropertyListing', data)
    .then((response) => {
      console.log('Smashed it!');
      console.log(response);
    })
    .catch((error) => {
      console.log('Oh no error!');
      console.log(error);
    });
};

export default addProperty;
