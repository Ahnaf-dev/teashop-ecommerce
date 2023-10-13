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


export const checkoutCart = async(lineItems) => {
  try {
    const {data} = await api.post('/checkout', {lineItems})
    return data;
  } catch(error) {
    throw error;
  }
}