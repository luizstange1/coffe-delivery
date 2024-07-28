import axios from "axios";

export const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
