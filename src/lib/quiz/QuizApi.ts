import axios, { AxiosError } from 'axios';
import client from '../common/client';

export async function insertQuiz(quiz: QuizType) {
  return client.post('/api/v1/quiz', quiz, {}).catch((e: AxiosError) => {
    console.warn(e);
  });
}

export async function getQuiz(id: number) {
  return client.get(`/api/v1/quiz/${id}`);
}

export async function solvedQuiz(id: number, isCorrect: boolean) {
  return client.patch(`/api/v1/quiz/solved/${id}`, {
    isCorrect: +isCorrect,
  });
}
