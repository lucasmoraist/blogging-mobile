import axios from 'axios';

const ipLocal = '';

export const api = axios.create({
  baseURL: `http://${ipLocal}:3000`,
});
