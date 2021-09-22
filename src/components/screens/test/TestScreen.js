import React, { useEffect } from "react";
import Div100vh from "react-div-100vh";
import { useSelector } from "react-redux";
import { Loading } from "../../ui/Loading";
import { TestContainer } from "./TestContainer";
import styles from "./TestScreen.module.css";

export const TestScreen = ({ history }) => {
  const { questions, loading, actualQuestion } = useSelector(
    (state) => state.test
  );

  useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
  }, [history, questions.length]);

  return (
    <Div100vh className={`${styles.screen} container`}>
      {!loading && questions.length !== 0 ? (
        <TestContainer question={questions[actualQuestion]} />
      ) : (
        <Loading text="Getting your results" />
      )}
    </Div100vh>
  );
};
