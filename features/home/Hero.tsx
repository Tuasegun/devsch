import React from 'react'
import {Box, Text, Heading, SimpleGrid, Button, Image} from '@chakra-ui/react'
import Link from 'next/link'
export const Hero = () => {
  return (
    <Box
    bg="brand.green.300"
   pt={["50px", "50px", "50px", "3.9375rem"]}
    pb={["50px", "50px", "50px", "6.4375rem"]}
    pl={["20px", "20px", "20px", "6.25rem"]}
    >

           
            <SimpleGrid columns={2} spacing={10}
            alignItems="center"
            >
                 {/* text-box */}
                <Box>
                    <Heading as="h1" fontSize={["49.8px"]} mb={4} lineHeight="3.914375rem">
                    Kick start your career in front end development
                    </Heading>

                    <Text maxW="29.25rem" mb={4} fontWeight="300" fontSize="1.145rem" lineHeight="2.09375rem">
                    Start your journey as a Frontend Developer. You’ll learn all you need to know to become a Frontend Developer and build exciting portfolios.
                    </Text>

                    <Link href="/courses">
                    <Button  
                    py={[4, 4, 4, "1.5625rem", "1.5625rem"]}
                    px={"2.8rem"}
                    fontSize="20.36px"
                    mr={4}>
                    Enroll now 
                    </Button>
                    </Link>
                </Box>


                  {/* pictures */}
                <Box
                display={['none', 'none', 'none', 'flex']}
                columnGap={"26px"}
                >
                    <Box
                    maxWidth="26.125rem"
                    height="auto"
                    >
                        <Image  src="assets/images/home/heroImage1.png" alt="hero" />
                    </Box>
                    <Box
                    display={['none', 'none', 'none', 'block']}
                    >
                        <Image src="assets/images/home/heroImage2.png" alt="hero" />
                    </Box>
                    <Box
                    display={['none', 'none', 'none', 'block']}
                    >
                        <Image src="assets/images/home/heroImage3.png" alt="hero" />
                    </Box>
                </Box>
            </SimpleGrid>
          
    </Box>
  )
}
