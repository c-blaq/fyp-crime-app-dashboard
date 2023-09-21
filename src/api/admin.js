import { useMutation, useQuery } from "@tanstack/react-query";
import Axios from "../lib/axios";

// get admin profile
export const useGetAdminProfileQuery = () => {
  const { data, ...props } = useQuery({
    queryKey: ["/admin/account/me"],
    queryFn: async () => {
      const { data } = await Axios.get("/admin/account/me");
      return data;
    },
    staletime: Infinity,
  });

  return {
    adminProfile: data?.admin,
    ...props,
  };
};

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

// verify invitation token
export const useVerifyAdminInviteTokenMutation = () => {
  const { mutateAsync, ...props } = useMutation({
    mutationFn: async (token) => {
      const { data } = await Axios.post("/admin/invitations/verify-token", {
        token,
      });
      return data;
    },
  });

  return {
    verifyAdminInviteToken: mutateAsync,
    ...props,
  };
};

// create new admin profile
export const useCreateAdminProfileMutation = () => {
  const { mutateAsync, ...props } = useMutation({
    mutationFn: async (body) => {
      const { data } = await Axios.post(
        "/admin/invitations/create-account",
        body
      );
      return data;
    },
  });

  return {
    createAdminProfile: mutateAsync,
    ...props,
  };
};
