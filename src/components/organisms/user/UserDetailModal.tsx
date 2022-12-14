import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;
  const isReadOnly = !isAdmin;
  const [userName, setUserName] = useState<string>("");
  const [userFullName, setUserFullName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");

  useEffect(() => {
    setUserName(user?.username || "");
    setUserFullName(user?.name || "");
    setUserEmail(user?.email || "");
    setUserPhone(user?.phone || "");
  }, [user]);

  const onChangeUserInfo = (
    e: ChangeEvent<HTMLInputElement>,
    func: React.Dispatch<React.SetStateAction<string>>
  ) => {
    func(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>User Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  value={userName}
                  isReadOnly={isReadOnly}
                  onChange={(e) => onChangeUserInfo(e, setUserName)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  value={userFullName}
                  isReadOnly={isReadOnly}
                  onChange={(e) => onChangeUserInfo(e, setUserFullName)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={userEmail}
                  isReadOnly={isReadOnly}
                  onChange={(e) => onChangeUserInfo(e, setUserEmail)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={userPhone}
                  isReadOnly={isReadOnly}
                  onChange={(e) => onChangeUserInfo(e, setUserPhone)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={() => {}}>Save</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
