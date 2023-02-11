import React from "react";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
import Link from "next/link";
export const Header = ({isWhite = false}) => {
  return (
    <Box
   pos="sticky"
   bg={isWhite ? "#FFFFFF" : "brand.green.300"}
   top="0"
   w="100%"
   py="1.5625rem"
    zIndex="999"
    >
      <MainContainer
      bg="none"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box 
          h={["50px", "50px", "50px", "50px", "43px"]}
          w={["150pxx", "50px", "50px", "50px", "181px"]}
          >
            <Image src="/assets/icons/schfordevslogo.svg" alt="logo" />
          </Box>

          <Flex
            columnGap="60px"
            display={['none', 'flex']}
          >
            <Link href="/">
              <Text
              fontSize="1.145rem"
              lineHeight="1.9725rem"
              fontWeight={300}
              >Home</Text>
            </Link>
            <Link href="/">
              <Text
              fontSize="1.145rem"
              lineHeight="1.9725rem"
              fontWeight={300}
              >Events</Text>
            </Link>
            <Link href="/">
              <Text
              fontSize="1.145rem"
              lineHeight="1.9725rem"
              fontWeight={300}
              >Blog</Text>
            </Link>
          </Flex>

          <Button
          py={[4, 4, 4, "1.5625rem", "1.5625rem"]}
          px={[8, 8, 8, "2.0rem", "2.0rem"]}
          display={['none', "flex"]}
          >View class plan</Button>
        </Flex>
      </MainContainer>
    </Box>
  );
};
