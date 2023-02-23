import React from 'react'
import {Box, SimpleGrid, Heading, Center, Text} from '@chakra-ui/react'
import {MainContainer} from '@/layouts/MainContainer'
import {SpeakerCard} from './SpeakerCard'
import {SpeakerContents} from '@/constant'
export const Speakers = () => {
  return (
    <Box
    my="6.9375rem"
    >
        <MainContainer>
            <Center
            display="flex"
            flexDirection="column"
            mb="1.8125rem"
            >
                <Heading>
                Previous Speakers
                </Heading>
                <Text>
                Missed our previous sessions? Dont worry you can still watch them below
                </Text>
            </Center>
            <Box>
            <SimpleGrid
              mb={['3.75rem', '3.75rem', '6.25rem']}
              columns={[2, 2, 2, 4]}
              spacing={['0.5rem', '0.5rem', '1.125rem']}
            >
                {
                    SpeakerContents.map(({speakerName, speakerImage}, index) => (
                        <SpeakerCard key={index} speakerName={speakerName} speakerImage={speakerImage}/>
                    ))
                }
            </SimpleGrid>
            </Box>
        </MainContainer>
    </Box>
  )
}

