import axios from 'axios';

export const apiBlog = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});
