import { types } from "../types/types";

export const LoadedQuestions = (arreglo) => ({
  type: types.testFinished,
  payload: arreglo,
});

export const changeQuestion = ({ question, value }) => ({
  type: types.changeQuestion,
  payload: {
    question,
    value,
  },
});

export const reset = () => ({
  type: types.reset,
});

export const startLoading = () => ({
  type: types.startloading,
});

export const finishLoading = () => ({
  type: types.finishLoading,
});
