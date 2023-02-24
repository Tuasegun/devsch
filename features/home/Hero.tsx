import React from 'react'
import {Box, Text, Heading, SimpleGrid, Button, Image, Flex} from '@chakra-ui/react'
import {HeroAnimation} from './HeroAnimation'
import Link from 'next/link'
export const Hero = () => {
  return (
    <Box
    bg="brand.green.300"
   pt={["30px", "50px", "50px", "3.9375rem"]}
    pb={["50px", "50px", "50px", "6.4375rem"]}
    pl={["1.25em", "1.25rem", "1.25rem", "6.25rem"]}
    pr={ ["1.25em", "1.25rem", "1.25rem", "0"]}
    pos="relative"
    height={["fit-content","100vh"]} 
    >

           
            <Flex 
            // columns={[1, 2]}
            alignItems="center"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            rowGap={["2.5rem", "2.5rem", "2.5rem", "0"]}
            // maxHeight={["100%", "100%", "100%", "31.6875rem"]}
            >
                 {/* text-box */}
                <Box
                width={["100%", "100%", "100%", "45%"]}
                >
                    <Heading as="h1" fontSize={["1.8rem", "2.375rem", "2.375em",  "49.8px"]} mb={4} lineHeight={["2.8rem","2.8rem","3rem","3.914375rem"]}>
                    Launch your career in Software development
                    </Heading>

                    <Text maxW="29.25rem" mb={"2.75rem"} fontWeight="300" fontSize={["1.125rem","1.145rem"]} lineHeight={["1.8rem","2.09375rem"]}>
                    Start your journey as a Frontend Developer. You’ll learn all you need to know to become a Frontend Developer and build exciting portfolios.
                    </Text>

                    <Link href="/enrol">
                    <Button  
                    py={[4, 4, 4, "29.8px", "1.8625rem"]}
                    px={"3.625rem"}
                    fontSize="20.36px"
                    mr={4}>
                    Enroll now 
                    </Button>
                    </Link>
                </Box>


                  {/* pictures */}
                <HeroAnimation/>
            </Flex>
          
    </Box>
  )
}
