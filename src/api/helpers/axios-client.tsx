import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://random-data-api.com/api/v2/',
});

export default axiosClient;
