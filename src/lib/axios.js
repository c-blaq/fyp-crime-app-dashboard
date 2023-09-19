import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

Axios.interceptors.request.use((config) => {
  const TOKENS = JSON.parse(localStorage.getItem("__tokens"));

  if (TOKENS) {
    config.headers.Authorization = `Bearer ${TOKENS.accessToken}`;
  }

  return config;
});

export default Axios;
