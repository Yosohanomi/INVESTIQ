import axios from "axios";
import { baseUrl } from "../../app/baseUrl/baseUrl";

export const authApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true 
});

authApi.interceptors.request.use(async (config) => {
    const { store } = await import('../../app/store/store');
    const token = store?.getState().auth.accessToken;
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});