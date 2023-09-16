import axios from "axios";
import { useAuth } from "../conext/AuthProvider";

const { token } = useAuth();

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
