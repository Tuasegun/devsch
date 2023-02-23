import React from 'react'
import {Box, Image, Text, Flex} from '@chakra-ui/react'

interface Props {
    image: string;
    name: string;
    content: string;
}

export const EnrolFloat = ({image, name, content}: Props)  => {
    return(
        <Box>
            <Flex
            bg={"rgba(255, 255, 255, 0.9)"}
            borderRadius="8.8px"
            p="1.1875rem 1.4375rem .75rem .9375rem"
            columnGap="1.125rem"
            width="15.125rem"
            alignItems="center"
            >
                <Box
                // width="3.125rem"
                // height="3.3125rem"
              
                >
                    <Image   boxSize="3.5rem" src={image} alt={name} objectFit="cover" width="100%" height="100%"/>
                </Box>
                <Box>
                    <Text
                    fontWeight="600"
                    fontSize="12.44px"
                    >{name}</Text>
                    <Text
                    fontSize="10px"
                    >{content}</Text>
                </Box>
            </Flex>
        </Box>
    )
}