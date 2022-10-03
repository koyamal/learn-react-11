import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  const onClickLog = () => {
    console.log("Test!");
  };
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal" onClick={onClickLog}>
        BBuuttttoonn
      </Button>
    </ChakraProvider>
  );
}
