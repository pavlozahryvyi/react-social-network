import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export default fetchBaseQuery({
  baseUrl: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY
  },
  credentials: 'include'
});
