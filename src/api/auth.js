import { useMutation } from "@tanstack/react-query";

const useLoginMutation = () => {
  const { data } = useMutation({
    mutationFn: async () => {},
  });
};
