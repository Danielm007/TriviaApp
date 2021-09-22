import React from "react";
import Div100vh from "react-div-100vh";
import styles from "./Loading.module.css";

export const Loading = ({ text = "Loading" }) => {
  return (
    <Div100vh className="container loading">
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{text}</p>
    </Div100vh>
  );
};
