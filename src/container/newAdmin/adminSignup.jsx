import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useCreateAdminProfileMutation,
  useVerifyAdminInviteTokenMutation,
} from "../../api/admin";

const AdminSignup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const param = useParams();
  const [adminCredentials, setAdminCredentials] = useState(null);
  const { verifyAdminInviteToken, isLoading: verifyingToken } =
    useVerifyAdminInviteTokenMutation();
  const { createAdminProfile, isLoading: creatingProfile } =
    useCreateAdminProfileMutation();

  console.log("credd", adminCredentials);

  const verifyToken = async () => {
    try {
      const response = await verifyAdminInviteToken(param?.invitationToken);
      setAdminCredentials(response?.invitation);

      console.log("cred22", response);
    } catch (error) {
      console.log("err", error);
      if (error.response?.status === 400) {
        toast({
          title: error?.response.data.error,
          status: "error",
          duration: 3000,
          position: "top-right",
        });
        navigate("/");
      }
    }
  };
  useEffect(() => {
    verifyToken();
  }, [param?.invitationToken]);

  const handleCreateAdmin = async (data) => {
    try {
      await createAdminProfile({
        ...data,
        invitationToken: adminCredentials?.token,
        role: adminCredentials?.role,
      });

      toast({
        title: "Admin created successfully!",
        status: "success",
        position: "top",
        duration: 3000,
      });
      navigate("/");
    } catch (error) {
      if (error?.response) {
        toast({
          title: error?.response.data.error,
          status: "error",
          position: "top",
          duration: 3000,
        });
      }
    }
  };

  return (
    <div>
      {verifyingToken ? (
        <Spinner size="lg" />
      ) : (
        <>
          <Heading
            textAlign="center"
            py="5"
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
          >
            <Link to="/">ResQue</Link>
          </Heading>
          <FormControl
            px="5"
            py="10"
            width={{
              base: "100%",
              md: "50%",
              lg: "30%",
            }}
            maxW="500px"
            mx="auto"
            my="auto"
            boxShadow={{
              base: "none",
              sm: "xs",
              md: "md",
            }}
          >
            <Heading
              as="h2"
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
              textAlign="center"
              mb="10"
            >
              Create admin profile
            </Heading>
            <form onSubmit={handleSubmit(handleCreateAdmin)}>
              <Input
                type="text"
                placeholder="First Name"
                mb="4"
                {...register("firstName")}
              />

              <Input
                type="text"
                placeholder="Last Name"
                mb="4"
                {...register("lastName")}
              />

              <Input
                type="email"
                placeholder="Email"
                mb="4"
                {...register("email")}
              />

              <Input
                type="password"
                placeholder="Password"
                mb="4"
                {...register("password")}
              />

              <Button
                type="submit"
                variant="solid"
                colorScheme="blue"
                display="block"
                ml="auto"
                mt="4"
              >
                {!creatingProfile ? "Sign up" : <Spinner size="xs" />}
              </Button>
            </form>
          </FormControl>
        </>
      )}
    </div>
  );
};

export default AdminSignup;
