import React from 'react'
import { PerksInterface } from '../../constant'
import {Box, Text, Heading, Image} from '@chakra-ui/react'
export const PerksCard = ({title, image, description}: PerksInterface) => {
  return (
    <Box>
        <Box
        boxSize={["1.125rem","4.409375rem"]}
        mb={[".5875rem","2.3125rem"]}
        >
            <Image src={image} alt="perks" />
        </Box>
        <Box>
            <Heading as="h6" fontSize="1.125rem" lineHeight="1.9125rem" mb={[".9375rem","1.625em"]}>{title}</Heading>
        </Box>
        <Box>
            <Text
            fontSize="1.145rem"
            lineHeight="2.09375rem"
            fontWeight="400"
            >
                {description}
            </Text>
        </Box>
    </Box>
    )
}
