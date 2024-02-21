import axios from "axios"

const BASE_URL = 'https://api.github.com/users/'

const apiService = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

export default apiService;