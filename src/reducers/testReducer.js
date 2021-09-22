import { types } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  loading: false,
  questions: [],
  actualQuestion: 0,
  questionsAnswered: [],
  question: {},
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.testFinished:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };

    case types.changeQuestion:
      return {
        ...state,
        actualQuestion: state.actualQuestion + 1,
        question: state.questions[state.actualQuestion + 1],
        questionsAnswered: [
          ...state.questionsAnswered,
          {
            ...action.payload.question,
            answer: action.payload.value,
            id: uuidv4(),
          },
        ],
      };

    case types.startloading:
      return {
        ...state,
        loading: true,
      };

    case types.finishLoading:
      return {
        ...state,
        loading: false,
      };

    case types.reset:
      return {
        ...state,
        loading: false,
        questions: [],
        actualQuestion: 0,
        questionsAnswered: [],
        question: {},
      };
    default:
      return state;
  }
};
