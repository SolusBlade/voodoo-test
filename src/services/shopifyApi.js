import axios from 'axios';

axios.defaults.baseURL = 'https://voodoo-sandbox.myshopify.com';

export const getProductsApi = () => {
  return axios
    .get('/products.json', {
      params: {
        limit: 12,
      },
    })
    .then(res => res.data);
};
