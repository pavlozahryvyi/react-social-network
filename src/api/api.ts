import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '506264c7-e08d-447a-ae53-bbc91bc9de7d'
  }
});
