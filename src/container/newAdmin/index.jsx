import { BsChevronLeft, BsPlus } from "react-icons/bs";
import PageLayout from "../../component/Layout";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  Select,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInviteAdminMutation } from "../../api/newAdmin";

const NewAdmin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { inviteAdmin, isLoading } = useInviteAdminMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInviteAdmin = async (data) => {
    try {
      const response = await inviteAdmin(data);

      if (response) {
        toast({
          title: response?.message,
          status: "success",
          position: "top",
          duration: 3000,
        });
        onClose();
      }
    } catch (error) {
      if (error?.response) {
        toast({
          title: error?.response.data.error,
          status: "error",
          position: "top",
          duration: 3000,
        });
      }

      if (error?.response.status == 401) {
        navigate("/");
      }
    }
  };

  return (
    <PageLayout>
      <Box maxW="7xl" margin="auto" paddingX="16px">
        <Link to="/overview">
          <BsChevronLeft />
        </Link>

        <Flex marginY="24px" gap="16px" justify="space-between">
          <Box>
            <Heading
              as="h2"
              fontSize={{
                base: "18",
                md: "24px",
              }}
            >
              Fathi Babayeju
            </Heading>
            <Text
              color="gray.600"
              marginY="6px"
              fontSize={{
                base: "14px",
                md: "16px",
              }}
            >
              babayejuadesina@gmail.com
            </Text>
            <Text>Administrator</Text>
          </Box>
          <Button variant="unstyled">Log out</Button>
        </Flex>

        <Flex align="center" justify="space-between">
          <Text>Sub-admins</Text>
          <Button
            display="flex"
            align="center"
            fontSize={{
              base: "14px",
              md: "16px",
            }}
            onClick={onOpen}
          >
            <BsPlus fontSize="24px" />
            <Text>Add Admin</Text>
          </Button>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Invite a new admin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl py="5">
                <form onSubmit={handleSubmit(handleInviteAdmin)}>
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

                  <Select placeholder="Select option" {...register("role")}>
                    <option value="admin">Administrator</option>
                    <option value="sub-admin">Sub-administrator</option>
                  </Select>

                  <Button
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    display="block"
                    ml="auto"
                    mt="4"
                  >
                    {!isLoading ? "Invite" : <Spinner size="xs" />}
                  </Button>
                </form>
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </PageLayout>
  );
};

export default NewAdmin;
