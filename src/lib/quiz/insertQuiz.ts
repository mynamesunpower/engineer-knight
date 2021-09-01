import axios, { AxiosError } from 'axios';

export default async (quiz: QuizType) => {
  return axios.post('/api/v1/quiz', quiz, {}).catch((e: AxiosError) => {
    console.warn(e);
  });
};
