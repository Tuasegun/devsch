import React from 'react'
import {Box, Heading, Text, Center} from '@chakra-ui/react'
import { MainContainer } from '@/layouts/MainContainer'

export const BlogHero = () => {
  return (
    <Box>
        <MainContainer bg="#F0F9EE">
            <Center
              flexDirection="column"
              py="6.8125rem"
            >
                <Heading
                fontSize={["1.25rem","1.5625rem"]}
                textAlign="center"
                mb=".875rem"
                >
                Read our blogs to learn more about how to become a better developer
                </Heading>
                <Text fontSize={["1.125rem","1.3125rem"]} textAlign={"center"} maxWidth={["100%","45%"]} lineHeight={["1.8rem","2.1rem"]}>
                There are several ways to become a better software engineer. One of the most important things you can do.
                </Text>
            </Center>
        </MainContainer>
    </Box>
  )
}
