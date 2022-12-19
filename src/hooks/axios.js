import axios from "axios";
// import { setInterceptor } from "../utility/auth";

export const instance = axios.create({
    baseURL:
        "http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1",
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
