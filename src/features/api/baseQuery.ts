import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export default fetchBaseQuery({
  baseUrl: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': '506264c7-e08d-447a-ae53-bbc91bc9de7d'
  },
  credentials: 'include'
});
