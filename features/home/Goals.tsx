import React from 'react'
import {Box, Text, Image, Heading, Flex} from '@chakra-ui/react'
import { MainContainer } from '@/layouts/MainContainer'

export const Goals = () => {
  return (
    <Box
    position="relative"
    bg="brand.green.300"
    bgImage="url(assets/images/home/goalsBgPattern.png)"
    >
    <MainContainer
   bg="none"
    >
    <Flex
    
    justifyContent="space-between"
    alignItems={['flex-start', 'flex-start', 'flex-start', 'center', 'center']}
    py="2.8125rem"
    flexDirection={['column', 'column', 'column', 'row', 'row']}
    rowGap="3.069375rem"
    >
       

    
        <Box>
        <Box
        boxSize={["3.125rem","4.5625rem"]} 
        objectFit="contain"
        mb={["1.125rem","2.03125rem"]}
        >
            <Image src="assets/icons/goalsIcon.svg" alt="goals" />
        </Box>
        <Box
        mb={["0.9375rem"]}
        >
            <Text
            fontSize={['1.125rem', '1.125rem', '1.125rem', '1.25rem', '1.25rem']}
            color="#2E6B26"

            >
           We are on a mission of training
            </Text>
        </Box>
        <Box>
            <Heading
            fontSize={['1.9rem', '1.9rem', '1.9rem', '3.19760625em']}
            fontWeight={700}
            color="#2E6B26"
            lineHeight={["2.8rem","2.8rem","3rem","3.7625rem"]}
            >
            1,000+ <Text as="span" fontWeight={"600"} fontSize={['1.5625rem', '1.5625rem', '1.5625rem',"2.5rem"]} color="#2E6B26">SKILLED SOFTWARE DEVELOPERS IN 3 YEARS</Text>
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
    </MainContainer>
    </Box>
    
  )
}
