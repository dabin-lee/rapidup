import axios from "axios";
// import { setInterceptor } from "../utility/auth";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// interceptors
instance.interceptors.request.use(
    // 요청 전 수행
    (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

// // 인터셉터 안쓰고 해야하는 상황일때
// instance.defaults.headers.common[
//     "Authorization"
// ] = `Bearer" ${token}`;
