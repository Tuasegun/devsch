import React from 'react'
import {Box, Text, Image, Heading, Flex} from '@chakra-ui/react'

export const Goals = () => {
  return (
    <Flex
    justifyContent="space-between"
    alignItems={['flex-start', 'flex-start', 'flex-start', 'center', 'center']}
    bg="brand.green.300"
    bgImage="url('assets/images/home/goalsBgPattern.png')"
    py="2.8125rem"
    px={['1.5625rem', '1.5625rem', '1.5625rem', '5%', '5%']}
    flexDirection={['column', 'column', 'column', 'row', 'row']}
    >
        <Box>
        <Box
        boxSize="4.5625rem"
        objectFit="contain"
        mb="2.03125rem"
        >
            <Image src="assets/icons/goalsIcon.svg" alt="goals" />
        </Box>
        <Box
        mb="0.9375rem"
        >
            <Text
            fontSize={['1.145rem', '1.145rem', '1.145rem', '1.25rem', '1.25rem']}
            color="#2E6B26"

            >
            We’re on a mision to train more than
            </Text>
        </Box>
        <Box>
            <Heading
            fontSize={['1.5625rem', '1.5625rem', '1.5625rem', '4.19760625rem', '4.19760625em']}
            fontWeight={700}
            color="#2E6B26"
            >
            1000+ People in 2023
            </Heading>
        </Box>
        </Box>

        <Box
        maxWidth="32.375rem"
        height="auto"
        objectFit={"contain"}
       
        >
            <Image  borderRadius="0.6091925rem" src="assets/images/home/goalsImage.png" alt="goals" />
        </Box>
    </Flex>
  )
}
