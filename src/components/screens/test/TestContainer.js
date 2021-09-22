import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TestScreen.module.css";
import {
  changeQuestion,
  startLoading,
  finishLoading,
} from "../../../actions/test";
import { useHistory } from "react-router";

export const TestContainer = ({ question = {} }) => {
  //History
  const history = useHistory();
  //Store for redux
  const { actualQuestion } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  //Handle Click
  const handleClick = (value) => {
    if (actualQuestion !== 9) {
      dispatch(changeQuestion({ question, value }));
    } else {
      dispatch(changeQuestion({ question, value }));
      dispatch(startLoading());
      //Improve UX simulating a loading state
      setTimeout(() => {
        dispatch(finishLoading());
        history.push("/results");
      }, 1000);
    }
  };

  //Return JSX
  return (
    <>
      {actualQuestion < 10 && (
        <>
          <h1 className="fs-24">{question.category}</h1>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: `${question.question}`,
              }}
              className={styles.question}
            />
            <p className="fs-20">{actualQuestion + 1} of 10</p>
          </div>
          <div className={styles.acciones}>
            <button onClick={() => handleClick("True")} className={styles.btn}>
              True
            </button>
            <button onClick={() => handleClick("False")} className={styles.btn}>
              False
            </button>
          </div>
        </>
      )}
    </>
  );
};
