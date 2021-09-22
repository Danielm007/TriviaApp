import axios from "axios";
export const clienteAxios = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
});
