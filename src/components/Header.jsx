import React from "react";
import { Flex, Box, Link } from "rebass";

const Header = () => {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Link variant="nav" href="/">
        To-do
      </Link>
      <Box mx="auto" />
      <Link variant="nav" href="/lista">
        Lista
      </Link>
      -
      <Link variant="nav" href="/add">
        Formulario
      </Link>
    </Flex>
  );
};

export default Header;
