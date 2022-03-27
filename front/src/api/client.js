import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.141.233:8000/',
});

export default apiClient;
