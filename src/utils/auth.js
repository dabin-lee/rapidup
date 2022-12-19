import axios from "axios";
// import { instance } from "../hooks/axios";

export const setInterceptor = (token) => {
    // interceptors
    axios.defaults.headers.common["Authorization"] = `Bearer" ${token}`;
};
