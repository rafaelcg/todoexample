import React from "react";
import { Formulario, Lista } from "./components";
import { Box, Flex } from "rebass";

const App = () => {
  return (
    <div className="App">
      <Flex width={1} justifyContent={"center"}>
        <Box width={[1, 1 / 2]}>
          <Formulario />
          <Lista />
        </Box>
      </Flex>
    </div>
  );
};

export default App;
