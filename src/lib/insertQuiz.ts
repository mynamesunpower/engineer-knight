import axios, { AxiosError } from 'axios';

export default async (quiz: Quiz) => {
  return axios.post('/insert', quiz, {}).catch((e: AxiosError) => {
    console.warn(e);
  });
};
