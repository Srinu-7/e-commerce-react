
import axios from 'axios';

const DEPLOYED='https://ecommerce-springboot-production.up.railway.app'

const LOCALHOST='http://localhost:8080'

export const API_BASE_URL = DEPLOYED;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
