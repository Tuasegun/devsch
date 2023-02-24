import React from 'react'
import { Box, Grid, GridItem, Text, Heading, SimpleGrid, Image, Center, Button } from '@chakra-ui/react'
import { members, memberInterface } from '../../constant/'
import { MainContainer } from '@/layouts/MainContainer'
export const Members = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [membersData, setMembersData] = React.useState<Array<memberInterface>>([])
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
            setMembersData(members.slice(0, 4))
        }else{
            setIsMobile(false)
            setMembersData(members)
        }
    }, [])
    return (
        <Box
        py={["4.625rem","10.125rem"]}
        >
            <MainContainer>
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
                    <Center
                    width="100%"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                          
                        >
                            <Heading
                                fontSize={["3.88035rem","5.03875rem"]}
                                lineHeight="3.168125rem"
                                fontWeight={700}
                                color="brand.white"
                            >1000+ </Heading>

                            <Heading
                                fontWeight={700}
                                color="brand.white"
                                fontSize={["0.8rem","2rem"]}
                                mt="1.123125rem"

                            >
                                Community members
                            </Heading>


                            <a href="https://chat.whatsapp.com/JkH714GssRYLvcDZXBWfDt">
                            <Button
                                bg="brand.white"
                                color="brand.green.400"
                                py="1.5625rem"
                                mt="1.5625rem"
                            >
                                Join community
                            </Button>
                            </a>
                        </Box>
                    </Center>

                </Box>

                <Grid templateColumns={["repeat(2,1fr)","repeat(5, 1fr)"]} gap={["0.7rem","1.156875rem"]} >
                    {
                        
                       isMobile ? membersData.map((member, index) => (
                            <GridItem key={index} colSpan={1}>
                                <Image h={["auto","16.613125rem"]} w="100%" src={member.image} alt="member" />
                            </GridItem>
                        )) : members.map((member, index) => (
                            <GridItem key={index} colSpan={1}>
                                <Image h={["auto","16.613125rem"]} w="100%" src={member.image} alt="member" />
                            </GridItem>
                        ))
                    }
                </Grid>

              
            </Box>
            </MainContainer>
        </Box>
    )
}
