import React from "react";
import { Box, Text, Stack, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" borderTopWidth="1px" paddingTop="2rem" marginTop="4rem">
      <Stack direction="row" spacing={4} marginBottom="1rem">
        <Link href="https://twitter.com/claudeparticles" isExternal>
          <FaTwitter />
        </Link>
        <Link href="https://facebook.com/claudeparticles" isExternal>
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com/claudeparticles" isExternal>
          <FaInstagram />
        </Link>
      </Stack>
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Claude Particles. All rights reserved.
      </Text>
      <Text fontSize="sm">123 Main St, Anytown, USA</Text>
    </Box>
  );
};

export default Footer;