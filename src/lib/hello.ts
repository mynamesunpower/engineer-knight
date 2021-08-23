import axios from 'axios';

export default async () => {
  return axios.get('/hello')
}