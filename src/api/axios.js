import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => { return config; },
    (error) => { return Promise.reject(error); }
);

axiosInstance.interceptors.response.use(
    (response) => { return response; },
    (error) => { return Promise.reject(error); }
);

export default axiosInstance;