import React, { useEffect } from "react";
import Div100vh from "react-div-100vh";
import { useSelector } from "react-redux";
import { ResultItem } from "./ResultItem";
import styles from "./ResultScreen.module.css";
import { reset } from "../../../actions/test";
import { useDispatch } from "react-redux";

export const ResultScreen = ({ history }) => {
  //Dispatch
  const dispatch = useDispatch();

  //Store from redux
  const { questionsAnswered } = useSelector((state) => state.test);

  //Simple Route Protection
  useEffect(() => {
    if (questionsAnswered.length === 0) {
      history.replace("/");
    }
  }, [history, questionsAnswered.length]);

  //Get the score
  const results = questionsAnswered.filter(
    (question) => question.correct_answer === question.answer
  );
  const score = results.length;

  //Handle Click to reset the store state and play again
  const handleClick = () => {
    dispatch(reset());
    history.replace("/");
  };

  return (
    <Div100vh className={`${styles.flex} container`}>
      <h1 className="fs-24">
        You scored <br />
        {score} / 10
      </h1>
      <div>
        <ul className={styles.list}>
          {questionsAnswered.map((question) => (
            <ResultItem key={question.id} question={question} />
          ))}
        </ul>
      </div>
      <button onClick={handleClick} className={styles.btn}>
        Play Again?
      </button>
    </Div100vh>
  );
};
