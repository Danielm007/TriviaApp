import React from "react";
import styles from "./ResultItem.module.css";

export const ResultItem = ({ question }) => {
  return (
    <li className={styles.container}>
      <i
        className={
          question.correct_answer === question.answer
            ? "fa-solid fa-plus"
            : "fa-solid fa-minus"
        }
      ></i>
      <p
        dangerouslySetInnerHTML={{
          __html: `${question.question}`,
        }}
      />
    </li>
  );
};
