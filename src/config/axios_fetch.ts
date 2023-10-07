import axios from 'axios';

export const apiData = axios.create({
    baseURL: String(import.meta.env.VITE_BACKEND_URL),
})