import React from 'react'
import {Box, Heading, Text, Button, Image} from '@chakra-ui/react'
import {HeroImagesGrid} from './HeroImagesGrid'
export const Hero = () => {
  return (
    <Box
    display="flex"

    >
        <Box>
            <Heading as="h1" fontSize="2.5rem" fontWeight="bold" lineHeight="3.5rem" color="brand.tertiary" mb="1.5rem">
            Make money
            </Heading>
            <Heading as="h1" fontSize="2.5rem" fontWeight="bold" lineHeight="3.5rem" color="brand.tertiary" mb="1.5rem">
            while helping others
            </Heading>
        </Box>
        <Box>
            <HeroImagesGrid />
        </Box>
    </Box>
  )
}
