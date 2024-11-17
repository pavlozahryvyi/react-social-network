import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { JWT } from '../../spec/consts';

export default fetchBaseQuery({
  baseUrl: 'https://social-network.samuraijs.com/api/1.0',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(JWT);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('API-KEY', import.meta.env.VITE_API_KEY);
    return headers;
  }
});
