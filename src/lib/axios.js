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

  if (TOKENS && !window.location.pathname.includes("/invitation")) {
    config.headers.Authorization = `Bearer ${TOKENS.accessToken}`;
  }

  return config;
});

Axios.interceptors.response.use(undefined, async (error) => {
  try {
    if (error?.response.status === 401) {
      console.log("error");
      localStorage.removeItem("__tokens");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }

    return Promise.reject(error);
  } catch (err) {
    console.log(err);
    return Promise.reject(error);
  }
});

export default Axios;
