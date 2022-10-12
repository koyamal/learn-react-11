import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin: boolean | null;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin, onClose } = props;
  const isReadOnly = isAdmin === true ? false : true;
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
                <Input value={user?.username} isReadOnly={isReadOnly} />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={user?.name} isReadOnly={isReadOnly} />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={user?.email} isReadOnly={isReadOnly} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={user?.phone} isReadOnly={isReadOnly} />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
