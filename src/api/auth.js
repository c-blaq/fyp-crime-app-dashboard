import { useMutation } from "@tanstack/react-query";
import Axios from "../lib/axios";

export const useLoginMutation = () => {
  const { mutateAsync, ...props } = useMutation({
    mutationFn: async (body) => {
      const { data } = await Axios.post("/admin/auth/login", body);
      return data;
    },
  });

  return { loginAdmin: mutateAsync, ...props };
};
