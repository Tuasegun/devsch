import React from 'react'
import {Box, Text, Image, Flex, Button, Link} from '@chakra-ui/react'
export const SideImage = () => {
  return (
    <Box
    position="relative"
    w="full"
    maxH="100vh"
    h="full"
    display={['none', 'none', 'none', 'block']}
    >
          <Box as={Link} href="/" pos="absolute" top="3.125rem" left="3.25rem">
          <Box mb={["1.6725rem", "0"]} width={["8.8125rem", "181px"]} height={["2.0981rem", "2.6938rem"]}>
            <Image objectFit="contain" src="/assets/icons/schfordevslogo.svg" alt="logo" />
          </Box>
      </Box>
        <Image  objectFit={"cover"} h="100vh" w="100%" maxW="580px"  src="assets/images/signup/signupImage.png" alt="register" objectPosition="top right" />
    </Box>
  )
}
