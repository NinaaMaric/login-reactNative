import axios from 'axios';

// Create axios client, pre-configured with baseURL
const APIKit = {
  baseURL: 'https://sibelogistics.ddns.net:8383',
  headers: {
    'Content-Type': 'application/json',
  },
}
let Api = axios.create(api);

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = () => {
  Api.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token') //any request will be selected from localStorage and will be added to the request headers
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
};

export default APIKit;