import axios, { AxiosError } from 'axios';

export async function insertQuiz(quiz: QuizType) {
  return axios.post('/api/v1/quiz', quiz, {}).catch((e: AxiosError) => {
    console.warn(e);
  });
}

export async function getQuiz(id: number) {
  return axios.get(`/api/v1/quiz/${id}`);
}

export async function solvedQuiz(id: number, isCorrect: boolean) {
  return axios.patch(`/api/v1/quiz/solved/${id}`, {
    isCorrect: +isCorrect,
  });
}
