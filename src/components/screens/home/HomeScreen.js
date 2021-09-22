import React from "react";
import { clienteAxios } from "../../../api/axios";
import styles from "./HomeScreen.module.css";
import Div100vh from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../ui/Loading";
import {
  finishLoading,
  LoadedQuestions,
  startLoading,
} from "../../../actions/test";
import { toast } from "react-toastify";

export const HomeScreen = ({ history }) => {
  const { loading } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(startLoading());
    try {
      const res = await clienteAxios.get();
      const arreglo = res.data.results;
      dispatch(LoadedQuestions(arreglo));
      history.push("/test");
    } catch (err) {
      dispatch(finishLoading());
      toast.error(
        "There was an unexpected problem 😔, please try again later..."
      );
      history.replace("/");
    }
  };

  return (
    <>
      <Div100vh className={`${styles.screen} container`}>
        {!loading ? (
          <>
            <h1>Welcome to the Trivia Challenge!</h1>
            <p>You will be presented with 10 True or False questions.</p>
            <p>Can you score 100%?</p>
            <button onClick={handleClick} to="/test" className={styles.btn}>
              Begin
            </button>
          </>
        ) : (
          <Loading />
        )}
      </Div100vh>
    </>
  );
};
