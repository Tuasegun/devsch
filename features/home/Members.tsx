import React from 'react'
import { Box, Grid, GridItem, Text, Heading, SimpleGrid, Image, Center, Button } from '@chakra-ui/react'
import { members } from '../../constant/'
export const Members = () => {
    return (
        <Box px="5%"
            py="9.76875rem"
        >
            <Box
                pos="relative"
            // px="5%"
            >
                {/* overlay */}
                <Box
                    bg="rgba(46, 107, 38, 0.6);"
                    w="100%"
                    h="100%"
                    pos="absolute"
                    top="0"
                    z-index="1"
                />
                {/* overlaytext */}
                <Box
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    z-index="2"
                >
                    <Center>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Heading
                                fontSize="5.03875rem"
                                lineHeight="3.168125rem"
                                fontWeight={700}
                                color="brand.white"
                            >1000+ </Heading>

                            <Heading
                                fontWeight={700}
                                color="brand.white"
                                fontSize={"2rem"}
                                mt="1.123125rem"

                            >
                                Community members
                            </Heading>

                            <Button
                                bg="brand.white"
                                color="brand.green.400"
                                py="1.5625rem"
                                mt="1.5625rem"
                            >
                                Join community
                            </Button>
                        </Box>
                    </Center>

                </Box>

                <Grid templateColumns="repeat(5, 1fr)" gap={"1.156875rem"}>
                    {
                        members.map((member, index) => (
                            <GridItem key={index} colSpan={1}>
                                <Image h="16.613125rem" w="100%" src={member.image} alt="member" />
                            </GridItem>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}
