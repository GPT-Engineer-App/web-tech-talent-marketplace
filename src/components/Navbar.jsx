import React from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" borderBottomWidth="1px" padding="1rem">
      <Flex alignItems="center">
        <Box fontWeight="bold" fontSize="xl">
          Claude Particles
        </Box>
        <Spacer />
        <Button as={Link} to="/signup" colorScheme="blue" marginRight="1rem">
          Sign Up
        </Button>
        <Button as={Link} to="/login" variant="outline">
          Log In
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
