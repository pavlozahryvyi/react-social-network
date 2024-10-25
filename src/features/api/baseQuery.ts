import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export default fetchBaseQuery({
  baseUrl: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': import.meta.env.VITE_REACT_APP_API_KEY,
    Authorization: `Bearer ${localStorage.getItem('token') as string}`
  }
});
