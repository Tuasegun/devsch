import { Box, Flex, Heading, Img, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { SpeakerInterface } from '../../constant/speaker'

export const SpeakerCard = ({
  speakerName,
  speakerImage,
}: SpeakerInterface) => {
  const [isHover, setIsHover] = React.useState(false)
  const [isLargerThan800] = useMediaQuery('(max-width: 800px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Flex
      alignItems="flex-end"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      w="full"
      h={['285.61px', '285.61px', '394px']}
      bg={`url(${speakerImage}) center/cover no-repeat`}
      filter={[
        `grayscale('0')`,
        `grayscale('0')`,
        `grayscale('0')`,
        `grayscale(${isHover ? '0' : '0'})`,
      ]}
    >
      
        <Box
          w="full"
          h={['100px', '79px', '109px']}
          px={['0.875rem', '0.875rem', '1.25rem']}
          py="1.875rem"
          pos="relative"
        >
          <Box
            h="full"
            w="full"
            pos="absolute"
            top="0"
            left="0"
            zIndex={['0', '0', '0', '-1']}
            bg="linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                    transform: matrix(1, 0, 0, -1, 0, 0)"
          />
          <Heading
            pos="relative"
            zIndex="1"
            fontSize={['0.8rem', '1.25rem']}
            color="brand.white"
            fontWeight="300"
            textAlign="center"
            pt={["2rem","2rem"]}
          >
            {speakerName}
          </Heading>
        </Box>  
    </Flex>
  )
}
