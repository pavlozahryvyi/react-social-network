import axios from 'axios';
import { JWT } from '../spec/consts';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': import.meta.env.VITE_API_KEY,
    Authorization: `Bearer ${localStorage.getItem(JWT) as string}`
  }
});
