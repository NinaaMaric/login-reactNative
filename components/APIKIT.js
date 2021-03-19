import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'https://sibelogistics.ddns.net:8383',
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  APIKit.interceptors.request.use(function(config) {
    config.headers.Authorization = '/rest/scriptrunner/latest/custom/genToken?';
    return config;
  });
};

export default APIKit;