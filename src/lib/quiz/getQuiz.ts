import axios, { AxiosError } from 'axios';

export default async (id: number) => {
  return axios.get(`/api/v1/quiz/${id}`);
};
