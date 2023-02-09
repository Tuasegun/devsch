import React from 'react'
import { Box, Text, Image, Flex, HStack } from '@chakra-ui/react'
import {BsCheck} from 'react-icons/bs'
export const Benefits = () => {
  return (
    <Box
    bg="brand.green.400"
    bgImage={"url('/assets/images/enrol/benBgPattern.png')"}
    py="2.5rem"
    px={['1.5625rem', '1.5625rem', '1.5625rem', '6%', '6%']}
    >
        <Box>
            <Flex
            alignItems={"center"}
            flexDir={['column', 'column', 'column', 'column', 'row']}
            justifyContent={"space-between"}

            >
                <HStack
                columnGap="1.1875rem"
                color={"brand.white"}
                fontSize="1.5625rem"
                fontWeight={500}
                >
                    <BsCheck />
                    <Text>
                    Beginner friendly
                    </Text>
                </HStack>
                <HStack
                 columnGap="1.1875rem"
                 color={"brand.white"}
                 fontSize="1.5625rem"
                 fontWeight={500}
                >
                    <BsCheck />
                    <Text>
                    Beginner friendly
                    </Text>
                </HStack>
                <HStack
                 columnGap="1.1875rem"
                 color={"brand.white"}
                 fontSize="1.5625rem"
                 fontWeight={500}
                >
                    <BsCheck />
                    <Text>
                    Beginner friendly
                    </Text>
                </HStack>
            </Flex>
        </Box>
    </Box>
  )
}
