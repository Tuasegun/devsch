import React from 'react'
import {Box, Text, Image, Flex, Button} from '@chakra-ui/react'
export const SideImage = () => {
  return (
    <Box
    position="relative"
    w="full"
    maxH="100vh"
    h="full"
   
    display={['none', 'none', 'none', 'block']}
    >
        <Image  objectFit={"cover"} h="100vh" w="100%" maxW="580px"  src="assets/images/signup/signupImage.png" alt="register" />
    </Box>
  )
}
