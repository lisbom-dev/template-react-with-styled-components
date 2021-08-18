import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com.br',
});
export default api;
