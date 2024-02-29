import { clientCredentials } from '../utils/client';

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// const deleteProduct = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/products/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then((resp) => resolve(resp.json()))
//     .catch(reject);
// });

export default getAllProducts;
