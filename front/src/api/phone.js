import apiClient from './client';

const endpoint = 'phones/?model=A';

const getAllPhones = () => apiClient.get(endpoint);

export default {
  getAllPhones,
};
