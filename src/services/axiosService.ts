import axios from "axios";

import { baseURL, token } from "../constants";

const axiosService = axios.create({ baseURL: baseURL.movies });

axiosService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`;
    return request;
});

export { axiosService };