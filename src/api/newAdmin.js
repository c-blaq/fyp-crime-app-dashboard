import { useMutation } from "@tanstack/react-query";
import Axios from "../lib/axios";

// invite new admin
export const useInviteAdminMutation = () => {
  const { mutateAsync, ...props } = useMutation({
    mutationFn: async (body) => {
      const { data } = await Axios.post(
        "/admin/invitations/invite-admin",
        body
      );
      return data;
    },
  });

  return {
    inviteAdmin: mutateAsync,
    ...props,
  };
};
