import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

export default apiAxios;
