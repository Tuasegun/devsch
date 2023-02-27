import React from "react";
import { SideImage } from "./SideImage";
import { SignupForm } from "./SignupForm";
import { Box, SimpleGrid, Link, Image } from "@chakra-ui/react";

export const SignupWrapper = () => {
  return (
    <SimpleGrid columns={[1, 1, 1, 2]} spacing="0" h="100vh">
      <Box
        as={Link}
        href="/"
        px="1rem"
        py="1rem"
        display={["block", "block", "block", "none"]}
      >
        <Box
          mb={["1.3725rem", "0"]}
          width={["8.8125rem", "181px"]}
          height={["2.0981rem", "2.6938rem"]}
        >
          <Image
            objectFit="contain"
            src="/assets/icons/schfordevslogo.svg"
            alt="logo"
          />
        </Box>
      </Box>
      <SideImage />
      <SignupForm />
    </SimpleGrid>
  );
};
