import apiClient from './client';

const endpoint = 'phones/';

const getAllPhones = () => apiClient.get(endpoint);

export default {
  getAllPhones,
};
