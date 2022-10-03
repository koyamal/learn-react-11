import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  const onClickLog = () => {
    console.log("Test!");
  };
  return (
    <ChakraProvider>
      <Button colorScheme="teal" onClick={onClickLog}>
        BBuuttttoonn
      </Button>
    </ChakraProvider>
  );
}
