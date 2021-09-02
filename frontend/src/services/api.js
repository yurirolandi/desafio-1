import axios from "axios";

export const requestCard = axios.create({
  baseURL: process.env.VUE_APP_API,
});
