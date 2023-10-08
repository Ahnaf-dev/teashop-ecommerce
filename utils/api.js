// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`, 
});

export const getProducts = async () => {
  try {
    const response = await api.get('/product'); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
